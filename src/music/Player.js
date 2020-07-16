import React, { Component, createRef } from 'react';
import AudioPlayer, { RHAP_UI, CURRENT_TIME } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import $ from 'jquery';
import './Player.css'


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
        this.player = createRef(null)
        return (
            <AudioPlayer 
            // src={this.state.episodeAudio}
            layout="stacked"
            showJumpControls={false}
            customVolumeControls={[]}
            customAdditionalControls={[]}
            >
              <audio
              src={this.state.episodeAudio}
              controls={false}
              loop={false}
              autoPlay={false}
              preload={true}
              ref={this.audio}
              
            />
            </AudioPlayer>
        )
    }
}