import React, { Component } from 'react';
import './PlaylistGridItem.css';
import { RiPlayCircleLine, RiPauseCircleLine } from "react-icons/ri";
import { Link } from 'react-router-dom';



export default class PlaylistGridItem extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
    // this.handlePlay = this.handlePlay.bind(this);
    // this.handlePause = this.handlePause.bind(this);
    this.state = {
        itemData: props.itemData,
        isHovering: false,
        isCurrent: false,
        isPlaying: false
    };
  }

  componentDidUMount() {
    this.setState({selectItemCallback: this.props.selectItem})
  }

  handlePlay = (e) => {
    if (!e) var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
    if (this.state.isCurrent) {
        
      this.props.audioRef.current.play();
      this.setState({isPlaying : true});


    }
    else {
      this.setState({isPlaying : true, isCurrent: true})
      this.props.updateNowPlaying(this.state.itemData.name, this.props.playlistKey, this.props.itemIndex)
      this.props.audioRef.current.src =  this.state.itemData.file;
      this.props.audioRef.current.load();
      this.props.audioRef.current.play();
      
      const audio = this.props.audioRef.current;

      const updateBg = this.props.updateBackground;
      const itemBgColor = this.state.itemData.backgroundColor;
      audio.addEventListener('play', function() {
        console.log("playing...")
          updateBg(itemBgColor);

      })
    }
  }

  renderControls = () => {
    if (this.state.isPlaying) {
      return <RiPauseCircleLine className="music-playControlAction" id="music-playControl" onClick={this.handlePause}/>
    }
    else {
      if (this.state.isHovering) {
        return <RiPlayCircleLine className="music-playControlAction" id="music-playControl" onMouseDown={e => e.stopPropagation()} onClick={this.handlePlay}/>
      }
    }
  }

  handlePause() {

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


  render() {
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

            <img draggable="false" className="music-gridItemImage music-noselect" src={require('../images/music/' + this.state.itemData.frontArtwork)} alt="fuck"/>
        </Link>

            <div>
            {this.renderControls()}
            </div>
        </div>

    </div>      
    );}
}