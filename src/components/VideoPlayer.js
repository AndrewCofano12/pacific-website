import React, { Component } from "react";
import "./VideoPlayer.css";
import Vimeo from "@vimeo/player";
import Fullscreen from "react-full-screen";
import PlayerController from "./PlayerController";
import CreditsOverlay from "./CreditsOverlay"

export default class VideoPlayer extends Component {
  timer;
  seekbar;
  volume = 30;

  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
      volume: 30,
      playbackPosition: 0,
      left: 0,
      top: 0, 
      right: 0,
      showPlayerControls: false,
      playbackLength: 0,
      isFull: false,
      isPlaying: true,
      looped: false,
    };
  }

  showPlayerControls() {
    if (!this.state.showPlayerControls) {
      clearTimeout(this.timer);
      this.hideWithTimer();
      this.setState({ showPlayerControls: true });
    }
  }

  hidePlayerControls() {
    this.setState({ showPlayerControls: false });
  }

  hideWithTimer() {
    this.timer = setTimeout(() => {
      this.hidePlayerControls();
    }, 4000);
  }

  handleResize() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  pauseVideo() {
    this.player.pause().then(() => {
      this.setState({
        isPlaying: false,
      });
    });
  }

  playVideo() {
    this.player.play().then(() => {
      this.setState({
        isPlaying: true,
        looped: false,
      });
    });
  }

  bubbleIframeMouseMove(iframe) {
    // Save any previous onmousemove handler
    var existingOnMouseMove = iframe.contentWindow.onmousemove;

    // Attach a new onmousemove listener
    iframe.contentWindow.onmousemove = function (e) {
      // Fire any existing onmousemove listener
      if (existingOnMouseMove) existingOnMouseMove(e);

      // Create a new event for the this window
      var evt = document.createEvent("MouseEvents");

      // We'll need this to offset the mouse move appropriately
      var boundingClientRect = iframe.getBoundingClientRect();

      // Initialize the event, copying exiting event values
      // for the most part
      evt.initMouseEvent(
        "mousemove",
        true, // bubbles
        false, // not cancelable
        window,
        e.detail,
        e.screenX,
        e.screenY,
        e.clientX + boundingClientRect.left,
        e.clientY + boundingClientRect.top,
        e.ctrlKey,
        e.altKey,
        e.shiftKey,
        e.metaKey,
        e.button,
        null // no related element
      );

      // Dispatch the mousemove event on the iframe element
      iframe.dispatchEvent(evt);
    };
  }

  componentDidMount() {
    this.handleResize();

    var iframe = document.querySelector("iframe");
    this.player = new Vimeo(iframe);

    this.player.setVolume(this.volume);

    this.attachListeners();
    this.attachVideoListener();
  }

  attachVideoListener() {
    this.player.getDuration().then((duration) => {
      this.setState({ playbackLength: duration - .5});
    });

    this.player.on("play", function () {
      this.setState({ isPlaying: true });
    });

    this.player.on("timeupdate", (event) => {
      this.setState({ playbackPosition: event.seconds });
      if (this.state.playbackLength < event.seconds) {
        this.goBackToBeginning();
      }
    });
  }

  attachListeners() {
    window.addEventListener("resize", this.handleResize.bind(this));
    window.addEventListener("mousemove", this.showPlayerControls.bind(this));
  }

  goBackToBeginning() {
    
    this.player.pause();
    this.player.setCurrentTime(0);
    // this.player.updateVideoPosition(.1)
    this.setState({
      isPlaying: false,
      looped: true,
    });
  }

  /** Funcs to pass as props */

  updateVideoPosition = (time) => {
    this.player.setCurrentTime(time);
  };

  goFull = () => {
    this.setState({ isFull: true });
  };

  exitFull = () => {
    this.setState({ isFull: false });
  };

  handleExit = () => {
    this.props.history.push("/films");
  };

  handlePlayPause = () => {
    if (this.state.isPlaying) {
      this.pauseVideo();
    } else {
      this.playVideo();
    }
  };

  renderVideoFrame() {
    return (
      <div
      style={{
        display:"block",
        overflow:"hidden",
      }}>
        <iframe
        className="frame"
        title="video"
        src={this.props.src}
        backgroundColor="black"
        style={this.state.looped ? {opacity: .5} : {opacity: 1}}
        width={this.state.width}
        height={this.state.height}
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen={true}
        fullscreen="true"
        allow="autoplay"
      />
      </div>
      
    );
  }

  renderControls() {
    return (
      <div>
        <PlayerController
          handleExit={this.handleExit}
          isShowing={this.state.showPlayerControls}
          isPlaying={this.state.isPlaying}
          handlePlayPause={this.handlePlayPause}
          playbackPosition={this.state.playbackPosition}
          playbackLength={this.state.playbackLength}
          updateVideoPosition={this.updateVideoPosition}
          isFullScreen={this.state.isFull}
          goFull={this.goFull}
          exitFull={this.exitFull}
          looped={this.state.looped}
        />
      </div>
    );
  }

  render() {
    return (
      <div>
      <Fullscreen
          enabled={this.state.isFull}
          onChange={(isFull) => this.setState({ 
            isFull
          })}
        >
          
      <div
        className="films-videoPage"
        style={{
          height: "100%",
          width: "100vw",
          display: "block",
          backgroundColor: "black",
        }}
      >
        <div
        
        // className="films-overlay"
        // style={{
        //   height: "100%",
        //   width: "100vw"
        // }}
        >
        

            {this.renderVideoFrame()}
            {this.renderControls()}
            </div>

      </div>
      </Fullscreen>
      </div>
    );
  }
}
