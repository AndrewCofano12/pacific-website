import React, { Component } from 'react';
import NavigationHeader from '../components/NavigationHeader';
import AudioPlayer, { RHAP_UI, CURRENT_TIME } from 'react-h5-audio-player';
import Player from './Player';
import 'react-h5-audio-player/lib/styles.css';
import $ from 'jquery';
import PlaybackSeekbar from '../components/PlaybackSeekbar';
import { RiPlayCircleLine, RiPauseCircleLine } from "react-icons/ri";
import './Episode.css'
import PlayIcon from '../icons/playButton.svg';
import PauseIcon from '../icons/pauseButton.svg';

export default class Episode extends Component {
  hasAddedAudioEventListener = false;


  constructor(props) {
    super(props);
    this.state = {
        episode: props.epData,
        episodeAudio: null,
        isPlaying: false,
        isCurrent: false,
        showCredits: false,
        isLoading: false,
        hasEventListener: false
    };

    // this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
  }

  handlePlay = () => {
    if (this.state.isCurrent) {
        
      this.props.audioRef.current.play();
      this.setState({isPlaying : true});


    }
    else {

      this.setState({isPlaying : true, isCurrent: true})
      this.props.updateNowPlaying(this.state.episode.name, this.props.playlistLink, this.props.itemIndex)
      this.props.audioRef.current.src =  this.state.episode.file;
      this.props.audioRef.current.load();            
      this.setState({isLoading: true});

      this.props.audioRef.current.play();

      const audio = this.props.audioRef.current;
      const updateBg = this.props.updateBackground;
      const itemBgColor = this.state.episode.backgroundColor;
      audio.addEventListener('timeupdate', function() {
        this.setState({isLoading: false});
        console.log("playing...")
          updateBg(itemBgColor);

      }.bind(this))

      audio.removeEventListener('timeupdate', null);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.npTitle != this.state.episode.name) {
      this.setState({isCurrent : false});
      // window.removeEventListener("keyup", this.handleSpacebarPress.bind(this))
      this.hasAddedAudioEventListener = false;
    }
    else {
      // window.addEventListener("keyup", this.handleSpacebarPress.bind(this));
      this.hasAddedAudioEventListener = true;


    }
  }

  isPlaying = () => {
    const audio = this.props.audioRef.current
    if (!audio) return false
    return !audio.paused && !audio.ended
  }

  handlePause() {
    this.setState({isPlaying : false})
    this.props.audioRef.current.pause();

  }

  showCredits = () => {
    this.setState({showCredits : true})
  }



  //async componentDidMount() {
  componentDidMount() {
    const audio = this.props.audioRef.current;
    if (audio) {
      if (audio.src == this.state.episode.file) {
        this.setState({isCurrent : true})
        if (!audio.paused) {
          this.setState({isPlaying: true})
        }
      }
    }      

  }

  componentWillUnmount() {
    console.log("unmounting....")

  }






  render() {
    return (
      <div className="music-singleEpisodeContainer" style={Object.assign({})}>
        
        {/* Item Artwork */}
        <div className="music-artworkWrapper" style={{backgroundColor: this.state.color}}>
            <img draggable="false" className="music-artwork music-coverImage music-noselect" src={"http://www.pacificfilm.co/wp-content/images/music/" + this.state.episode.frontArtwork} alt="fuck"/>
            <img draggable="false" className="music-artwork music-tracklistImage music-noselect" src={"http://www.pacificfilm.co/wp-content/images/music/" + this.state.episode.backArtwork} alt="fuck"/>
        </div>

        {/* Item Playback Control */}
        <div className="music-audioPlayerContainer">
            <PlaybackSeekbar 
              audioRef={this.props.audioRef}
              isCurrent={this.state.isCurrent}
              isPlaying={this.state.isPlaying}
              npTitle={this.props.npTitle}
              file={this.state.episode.file}
              audioDuration={this.state.episode.duration}/>
            <div className="music-itemControllerContainer">              
            <div className="music-creditsOuterContainer">
                <div className="music-creditsInnerContainer">
                  {this.state.showCredits ? 
                  (<div className="music-credits">
                    {this.state.episode.credits.map((credit,i) => {
                      return (
                        <div className="music-creditline">{credit}</div>
                        )
                    }
                    )}
                  </div>) : 
                  null}
                  {this.state.showCredits ? null : (<div className="music-extrasButton music-extrasLink" onClick={this.showCredits}>notes</div>)}

                </div>
                </div>
              <div className="music-itemControllers">
                <div className={`music-playlistSliderControl music-prevSliderControl ${this.props.itemIndex > 0 ? "" : "music-inactive"}`} onClick={this.props.goBack}>prev</div>
                <div className="music-audioControlContainer">
                  {(this.isPlaying() && this.state.isCurrent) ? (
                      // <RiPauseCircleLine className="music-itemPlayControlAction" id={`music-playControl${this.props.playlistKey}${this.props.itemIndex}`} onClick={this.handlePause}/>
                      <img className="music-itemPlayControlAction" src={PauseIcon} alt="pause" onClick={this.handlePause} />
                      ) : (
                        <img src={PlayIcon} className="music-itemPlayControlAction" alt="play" onClick={this.handlePlay}/>

                    // <RiPlayCircleLine className="music-itemPlayControlAction" id={`music-playControl${this.props.playlistKey}${this.props.itemIndex}`} onClick={this.handlePlay}/>

                  )}
                </div>
                <div className={`music-playlistSliderControl music-nextSliderControl ${this.props.itemIndex < (this.props.playlistLength - 1) ? "" : "music-inactive"}`} onClick={this.props.goForward}>next</div>
              </div>
              <div className="music-soundcloudContainer music-extrasButton"><a className="music-extrasLink" target="_blank" href={this.state.episode.link}>soundcloud</a></div>

            </div>
            <div className={`${(this.state.isPlaying && this.state.isLoading) ? 'music-showLoading' : 'music-hideLoading'} music-loadingIndContainer`}>
              <div className="music-loadingInd">loading...</div>
            </div>


            

        </div>
      </div>

    
    );  }
}