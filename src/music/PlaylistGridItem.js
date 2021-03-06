import React, { Component } from 'react';
import './PlaylistGridItem.css';
import { RiPlayCircleLine, RiPauseCircleLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import PlayIcon from '../icons/playButton.svg';
import PauseIcon from '../icons/pauseButton.svg';
import ImagePlaceholder from '../components/ImagePlaceholder';


export default class PlaylistGridItem extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.state = {
        itemData: props.itemData,
        isHovering: false,
        isCurrent: false,
        isPlaying: false,
        isLoading: false,
        imgsLoaded: false,
        allLoaded: props.allLoaded
    };
  }

  componentDidMount() {
    this.setState({isPlaying: this.isPlaying()})
    // console.log("npTitle is: " + this.props.npTitle)
    if (this.props.npTitle == this.state.itemData.name) {
      this.setState({isCurrent : true});
    }
    else {
      this.setState({isCurrent : false});

    }
  }

  componentDidUpdate() {
    const audio  = this.props.audioRef.current;
    
    // if (audio && !this.hasAddedAudioEventListener && this.props.isCurrent) {
    //     this.audio = audio
    //     this.hasAddedAudioEventListener = true
    //     audio.addEventListener('timeupdate', this.handleAudioTimeUpdate)
    //     audio.addEventListener('progress', this.handleAudioDownloadProgressUpdate)
    // }

  }

  componentWillReceiveProps(newProps) {
    if (newProps.npTitle != this.state.itemData.name) {
      this.setState({isCurrent : false});
    }
  }

  isPlaying = () => {
    const audio = this.props.audioRef.current
    if (!audio) return false
    return !audio.paused && !audio.ended
  }

  handlePlay = (e) => {
    if (!e) var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
    // console.log(this.props.playItem);
    // const updateItem = this.props.playItem;
    // updateItem(this.state.itemData.file);
    const audio = this.props.audioRef.current;
    if (this.state.isCurrent) {
      if (audio.paused && audio.src) {
        const audioPromise = audio.play()
        audioPromise.then(null).catch((err) => {
       
      })
      }
    }
    else {
      this.setState({isPlaying : true, isCurrent: true})
      this.props.updateNowPlaying(this.state.itemData.name, this.props.playlistKey, this.props.itemIndex)
      this.props.audioRef.current.src =  this.state.itemData.file;
      this.props.audioRef.current.load();
      this.setState({isLoading: true});

      this.props.audioRef.current.play();
      
      const audio = this.props.audioRef.current;

      const updateBg = this.props.updateBackground;
      const itemBgColor = this.state.itemData.backgroundColor;
      audio.addEventListener('timeupdate', function() {
        this.setState({isLoading: false});
        // console.log("playing...")
          updateBg(itemBgColor);

      }.bind(this))

      audio.removeEventListener('timeupdate', null);
    }
  }

  handlePause = () => {
    this.props.audioRef.current.pause();
    this.setState({isPlaying: false});
  }

  renderControls = () => {
    const isPlaying = this.isPlaying()
    if (this.state.isCurrent && isPlaying) {
      return <img className="music-playControlAction" id="music-playControl" src={PauseIcon} alt="pause" onClick={this.handlePause} />

    }
    else {
      if (this.state.imgLoaded && this.state.isHovering) {
        return <img src={PlayIcon} className="music-playControlAction" id="music-playControl" alt="play" onClick={this.handlePlay}/>
       }
    }
  }


  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  handleItemClick() {
    this.props.selectItem(this.props.itemIndex)
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }
  

  handleImageLoaded() {
    // console.log("img loaded...");
    this.props.reportImgLoaded();
    // this.setState({ imgLoaded: true });
  }
  
  render() {
    const loaded = this.props.allLoaded;
    const imageStyle = !loaded ? { display: "none" } : {};
    // console.log(loaded);
    return (
    <div  
        onMouseEnter={this.handleMouseHover}
        onMouseLeave={this.handleMouseHover} 
        onClick={this.handleItemClick}
        className="music-playlistGridItem">

        {/* Grid Item Cover */}
        <div className="music-gridItemCover">
        <Link
          to={{pathname: `${this.props.matchURL}/${this.props.playlistKey}/view`, 
          state: {
            fromLink: true,
            showCoverIndex: this.props.itemIndex
          }}}>
            <div className="music-gridItemImageContainer">
              {loaded ? null : <ImagePlaceholder grid={true}/>}
              <img draggable="false"  style={imageStyle} onLoad={this.handleImageLoaded.bind(this)} className="music-gridItemImage music-noselect" src={"https://www.pacificfilm.co/wp-content/images/music/" + this.state.itemData.frontArtwork} alt="img"/>
            </div>
            <div className={`${(this.state.isPlaying && this.state.isLoading) ? 'music-showLoading' : 'music-hideLoading'} music-gridLoadingIndContainer`}>
              <div className="music-gridLoadingInd">loading...</div>
            </div>
        </Link>

            <div>
            {this.renderControls()}
            </div>
        </div>

    </div>      
    );}
}