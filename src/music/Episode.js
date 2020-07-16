import React, { Component } from 'react';
import NavigationHeader from '../components/NavigationHeader';
import AudioPlayer, { RHAP_UI, CURRENT_TIME } from 'react-h5-audio-player';
import Player from './Player';
import 'react-h5-audio-player/lib/styles.css';
import $ from 'jquery';
import PlaybackSeekbar from '../components/PlaybackSeekbar';
import { RiPlayCircleLine } from "react-icons/ri";
import './Episode.css'

export default class Episode extends Component {
  constructor(props) {
    super(props);
    this.state = {
        episode: props.epData,
        episodeAudio: null
    };
    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePlay() {
      //this.props.onPlay(this.props.playlistKey, this.props.itemIndex);
      this.props.onPlay(this.state.episode.file, this.state.episode.backgroundColor);
        console.log("audio ready:::: " + this.props.audioRef.current.readyState);
      this.props.audioRef.current.play();

  }

  //async componentDidMount() {
  componentDidMount() {
    console.log("this episode's "+ this.state.episode.name + "index is ..." + this.props.itemIndex)
    // const resolve = this.props.resolve;
    // const { default: episodeAudio } = await resolve();
    // this.setState({ episodeAudio });

    // if (this.props.childKey == 0) {
    //   var prevControl = $('<span />').addClass('music-playlistSliderControl music-prevSliderControl').html('prev');
    //   var goBack = this.props.goBack;
    //   prevControl.click(function() {
    //     goBack();
    //   });

    //   var nextControl = $('<span />').addClass('music-playlistSliderControl music-nextSliderControl').html('next');
    //   var goForward = this.props.goForward;
    //   nextControl.click(function() {
    //     goForward();
    //   });


    //   // $('.rhap_main-controls').prepend(`<span className='music-playlistSliderControl music-prevSliderControl'>prev</span>`);
    //   $('.rhap_main-controls').prepend(prevControl);
    //   $('.rhap_main-controls').append(nextControl);

    // }

    
  }


  render() {
    return (
      <div className="music-singleEpisodeContainer" style={Object.assign({})}>
        
        {/* Item Artwork */}
        <div className="music-artworkWrapper" style={{backgroundColor: this.state.color}}>
            <img draggable="false" className="music-artwork music-coverImage music-noselect" src={require('../images/music/' + this.state.episode.frontArtwork)} alt="fuck"/>
            <img draggable="false" className="music-artwork music-tracklistImage music-noselect" src={require('../images/music/' + this.state.episode.backArtwork)} alt="fuck"/>
        </div>

        {/* Item Playback Control */}
        <div className="music-audioPlayerContainer">
            <PlaybackSeekbar 
              audioRef={this.props.audioRef}
              npFile={this.props.npFile}/>
            <div className="music-itemControllerContainer">
              <div className="music-playlistSliderControl music-prevSliderControl" onClick={this.props.goBack}>prev</div>
              <div className="music-audioControlContainer">
                <RiPlayCircleLine className="music-itemPlayControlAction" id={`music-playControl${this.props.playlistKey}${this.props.itemIndex}`} onClick={this.handlePlay}/>
              </div>
              <div className="music-playlistSliderControl music-nextSliderControl" onClick={this.props.goForward}>next</div>
            </div>
          {/* <Player resolve={() => import('../audio/' + this.state.episode.file)}/>  */}
            {/* <AudioPlayer 
            // src={this.state.episodeAudio}
            layout="stacked"
            showJumpControls={false}
            customVolumeControls={[]}
            customAdditionalControls={[]}
            onError={console.log("hitting error")}
            /> */}



            

        </div>
      </div>

    
    );  }
}