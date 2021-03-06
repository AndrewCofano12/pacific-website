import React, { Component } from "react";
import "./PlayerController.css";
import {
  FiMaximize,
  FiMinimize,
  FiXCircle,
  FiPlay,
  FiPause,
} from "react-icons/fi";
import CreditsOverlay from './CreditsOverlay';
import PlayNoCircleIcon from '../icons/PlayNoCircle.svg';
import PauseNoCircleIcon from '../icons/PauseNoCircle.svg';



export default class PlayerController extends Component {
  
  componentDidUpdate() {
    this.seekbar = document.getElementById("seekbar");
    if (this.props.isShowing) {
      this.seekbar.addEventListener("click", (e) => {
        var value_clicked = e.offsetX / this.seekbar.offsetWidth;
        this.props.updateVideoPosition(value_clicked * this.props.playbackLength);
      });
    }
  }

  renderControls() {
    if (this.state.showPlayerControls) {
      return <div>{this.renderExitCircle()}</div>;
    } else {
      return null;
    }
  }

  renderExitCircle() {
    return (
      <div className="films-exitVideo">
        <FiXCircle id="exitControl" onClick={() => this.props.handleExit()} />
      </div>
    );
  }

  renderCredits() {
    return (
      <div className="films-creditsContainer">
        <CreditsOverlay filmObject={this.props.filmObject}/>
      </div>
    );
  }

  formatTime(time) {
    var minute = Math.floor(time / 60);
    var seconds = Math.floor(time % 60);
    if (seconds < 10) {
      return minute + ":0" + seconds;
    }
    return minute + ":" + seconds;
  }

  render() {
    // if (this.props.isShowing) {
      return (
        <div
        className={this.props.isShowing ? "fade-in" : "fade-out"}>
          {this.renderCredits()}
          {this.renderExitCircle()}
          <div
            className="films-controlContainer"
            style={{
              zIndex: 20,
              position: "absolute",
              width: window.innerWidth - 160,
              marginRight: 80,
              marginLeft: 80,
              bottom: 60,
            }}
          >
            <span className="films-playVideo">
              {this.props.isPlaying ? (
              <img className="playControlAction" src={PauseNoCircleIcon} id="playControl" alt="pause" onClick={() => this.props.handlePlayPause()}/>
              ) : (
                <img className="playControlAction" src={PlayNoCircleIcon} id="pauseControl" alt="play" onClick={() => this.props.handlePlayPause()}/>
              )}
            </span>

            <div className="progressContainer">
              <div className="films-timeContainer">
                <span className="playbackTime" id="films-timeElapsed">
                  {this.formatTime(this.props.playbackPosition)}
                </span>
                <span className="playbackTime" id="films-timeLeft">
                  {this.formatTime(this.props.playbackLength)}
                </span>
              </div>
              <progress
                id="seekbar"
                className="seekbar"
                value={this.props.playbackPosition}
                max={this.props.playbackLength}
              />
            </div>
            <span className="films-maximizeVideo">
              {this.props.isFullScreen ? (
                <FiMinimize
                  className="maxControlAction"
                  id="minControl"
                  onClick={this.props.exitFull}
                />
              ) : (
                <FiMaximize
                  className="maxControlAction"
                  id="maxControl"
                  onClick={this.props.goFull}
                />
              )}
            </span>
          </div>
        </div>
      );
    }
  // }
}
