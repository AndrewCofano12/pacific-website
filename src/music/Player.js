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
            //src={'../audio/' + episode.file}
            src={this.state.episodeAudio}
            layout="stacked"
            showJumpControls={false}
            customVolumeControls={[]}
            customAdditionalControls={[]}
            />
        )
    }
}

{/* <AudioPlayer 
            //src={'../audio/' + episode.file}
            src={this.state.episodeAudio}
            layout="stacked"
            showJumpControls={false}
            customVolumeControls={[]}
            customAdditionalControls={[]}
            />


const Player = ({
  isPlaying,
  playerJson,
  PlaynPause,
  SetPlayerRef,
  ShowPlayer
}) => {
  const PlayerRef = useRef(null);
  return isPlaying ? (
    <div
      className="music_player"
      style={ShowPlayer ? { display: "block" } : { display: "none" }}
    >
      <header>Now Playing</header>
      <div className="poster_photo">
        <img
          src={playerJson.artwork_url}
          alt="poster"
          style={{
            width: "100%",
            height: "100%"
          }}
        />
      </div>
      <AudioPlayer
        ref={PlayerRef}
        className="player_Real"
        autoPlay
        src={playerJson.audio_url}
        onPlay={() => {
          PlaynPause(true);
          console.log(PlayerRef);
          SetPlayerRef(PlayerRef);
        }}
        onPause={() => {
          PlaynPause(false);
          console.log(PlayerRef);
          SetPlayerRef(PlayerRef);
        }}
        customAdditionalControls={[]}
        customVolumeControls={[]}
        showSkipControls={true}
        showJumpControls={false}
        // layout="stacked-reverse"
        // other props here
      />
    </div>
  ) : (
    ""
  );
};

const mapDispatchToProps = dispatch => ({
  PlaynPause: bool => dispatch(PlaynPause(bool)),
  SetPlayerRef: ref => dispatch(SetPlayerRef(ref))
});

export default connect(
  null,
  mapDispatchToProps
)(Player);

// My original Code */}
