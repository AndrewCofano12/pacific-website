import React, { Component } from 'react';
import NavigationHeader from '../components/NavigationHeader';
import AudioPlayer, { RHAP_UI, CURRENT_TIME } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import $ from 'jquery';


import './Episode.css';

export default class Episode extends Component {
  constructor(props) {
    super(props);
    this.state = {
        episode: props.epData,
        episodeAudio: null
    };
  }

  async componentDidMount() {
    const resolve = this.props.resolve;
    const { default: episodeAudio } = await resolve();
    this.setState({ episodeAudio });

  //   $('.rhap_main-controls').append(`<span className="music-prevSliderControl onClick={this.props.goBack}>
  //       prev
  //     </span>
  //     <span onClick={this.props.goForward}>
  //       next
  //     </span>`
  // );

    if (this.props.childKey == 0) {
      var prevControl = $('<span />').addClass('music-playlistSliderControl music-prevSliderControl').html('prev');
      var goBack = this.props.goBack;
      prevControl.click(function() {
        goBack();
      });

      var nextControl = $('<span />').addClass('music-playlistSliderControl music-nextSliderControl').html('next');
      var goForward = this.props.goForward;
      nextControl.click(function() {
        goForward();
      });


      // $('.rhap_main-controls').prepend(`<span className='music-playlistSliderControl music-prevSliderControl'>prev</span>`);
      $('.rhap_main-controls').prepend(prevControl);
      $('.rhap_main-controls').append(nextControl);


      //this.player = createRef();
      
    
      // $('.music-prevSliderControl').click(function() {
      //   console.log("attaching...")
      //   (this.props.goBack)();
      // });
      // $('.music-nextSliderControl').click(function() {
      //   (this.props.goForward)();
      // });
    }

    
    // $('.rhap_main-controls').addClass(`${this.state.episode.name}-audioControl`);
    // $(`${this.state.episode.name}-audioControl`).append("<span>prev</span><span>next</span>");



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
            <AudioPlayer 
            //src={'../audio/' + episode.file}
            src={this.state.episodeAudio}
            layout="stacked"
            showJumpControls={false}
            customVolumeControls={[]}
            customAdditionalControls={[]}
            />
        </div>
      </div>

    
    );  }
}