import React, { Component } from 'react';
import NavigationHeader from '../components/NavigationHeader';
import AudioPlayer, { RHAP_UI, CURRENT_TIME } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

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

    }


  render() {
    console.log(this.state.musicObject)
    return (
<div className="music-singleEpisodeContainer"style={Object.assign({})}>
                    <div className="music-artworkWrapper" style={{backgroundColor: this.state.color}}>
                        <img draggable="false" className="music-artwork music-coverImage music-noselect" src={require('../images/music/' + this.state.episode.frontArtwork)} alt="fuck"/>
                        <img draggable="false" className="music-artwork music-tracklistImage music-noselect" src={require('../images/music/' + this.state.episode.backArtwork)} alt="fuck"/>
                    </div>
                    <div className="music-audioPlayerContainer">
                        <AudioPlayer 
                        //src={'../audio/' + episode.file}
                        src={this.state.episodeAudio}
                        layout="horizontal-reverse"
                        showJumpControls={false}
                        customVolumeControls={[]}
                        customAdditionalControls={[]}
                        />
                    </div>
                </div>
      );  }
}