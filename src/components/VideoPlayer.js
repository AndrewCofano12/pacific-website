import React, { useRef, useState, Component, Text, useCallback } from 'react';
import "./VideoPlayer.css"
import request from "../node/vimeoApi"
import Vimeo from '@vimeo/player'
import { FiMaximize, FiMinimize, FiXCircle } from 'react-icons/fi';
import Fullscreen from "react-full-screen";
import $ from 'jquery'


export default class VideoPlayer extends Component {
  timer
  
  constructor(props) {
      super(props)
      this.myRef = React.createRef();
      let player 
      this.state = {
        seconds: 0,
        width: window.innerWidth,
        height: window.innerHeight,
        volume: 30,
        playbackPosition: 0,
        left: 0,
        showPlayerControls: false,
        playbackLength: 0,
        isFull: false,
        isPlaying: false

      }
      this.handleExit = this.handleExit.bind(this);

  }

  handleExit() {
    this.props.history.push('/films');
  }


    showPlayerControls() {
      if(!this.state.showPlayerControls) {
        clearTimeout(this.timer)
        this.hideWithTimer();
        this.setState({ showPlayerControls: true });
      }
    }

    hidePlayerControls() {
      this.setState({ showPlayerControls: false });
    }

    hideWithTimer() {
      this.timer = setTimeout(() => {
        this.hidePlayerControls()
      }, 4000)
    }

    handleResize() {
      // window shrinks horizontally
      const height = window.innerHeight
      const width = window.innerWidth
      
      // 16:9 aspect ratio
      if(height / width > .5625) {
        this.setState({left: this.state.left + (this.state.width - width) * -.5})
        this.setState({width: height / .5625, height: height }) //shrink horizontally
        
      } else {
        this.setState({width: width, height: width *.5625 }) //shrink vertically
      }
    }

    handlePlayPause(videoPlayer) {
      if (this.state.isPlaying) {
        videoPlayer.pause().then(() => {
          this.setState({ isPlaying: false});
          $('.films-videoPage').css('cursor', "URL('../images/icons/play1.png')");
        });
      }
      else {
        videoPlayer.play().then(() => {
          this.setState({ isPlaying: true});
          $('.films-videoPage').css('cursor', "URL('../images/icons/pause1.png')");
        });
      }
    }

    resetTimer() {
      this.setState({mouseTimer: 0})
    }

    formatTime(time) {
      var minute = Math.floor(time / 60)
      var seconds = Math.floor(time % 60)
      if(seconds < 10) {
        return minute + ":0" + seconds
      }
      return minute + ":" + seconds
    }

    bubbleIframeMouseMove(iframe){
      // Save any previous onmousemove handler
      var existingOnMouseMove = iframe.contentWindow.onmousemove;
  
      // Attach a new onmousemove listener
      iframe.contentWindow.onmousemove = function(e){
          // Fire any existing onmousemove listener 
          if(existingOnMouseMove) existingOnMouseMove(e);
  
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
      this.handleResize()
      var iframe = document.querySelector('iframe');  
      var videoSeekbar = document.querySelector('progress'); 
      this.player = new Vimeo(iframe)
      window.addEventListener("resize", this.handleResize.bind(this))
      window.addEventListener("mousemove", this.showPlayerControls.bind(this))
      window.addEventListener("mousedown", () => this.handlePlayPause(this.player))
      this.player.setVolume(this.state.volume)

      this.player.on('timeupdate', (event) => {
        this.setState({playbackPosition: event.seconds})
      })

      this.player.getDuration().then( (duration) => {
        this.setState({playbackLength: duration})
      });

      this.player.on('play', function() {
        console.log('Played the video');
        this.setState({ isPlaying: true });
        this.handleCursor();
      });

    }

    componentDidUpdate() {
      if(this.state.showPlayerControls) {
        
        document.getElementById("seekbar").addEventListener("click", (e) => {
          var value_clicked = e.offsetX * this.max / this.offsetWidth;      
          this.player.setCurrentTime(e.offsetX / (window.innerWidth - 160) * this.state.playbackLength) 
          
        })
      }
    }


    handlePlayPause(player) {
      player.getPaused().then((paused) => {
        if(paused) {
          player.play()
        } else {
          player.pause()
        }
      });
    }

    onVideoProgress(player) {
      player.getCurrentTime()
    }

    increaseVolume(player) {
      var newVolume = this.state.volume +.05
      this.setState({volume: newVolume})
      player.setVolume(this.state.volume)
    }

    decreaseVolume(player) {
      var newVolume = this.state.volume -.05
      this.setState({volume: newVolume})
      player.setVolume(this.state.volume)
    }


    goFull = () => {
      this.setState({ isFull: true });
    }
  
    exitFull = () => {
      this.setState({ isFull: false });
    }
  

    render() {

        return(
          <div className="films-videoPage" style={{height: "100%", width: "100", display: "block", backgroundColor: 'black'}}>
            <Fullscreen
              enabled={this.state.isFull}
              onChange={isFull => this.setState({isFull})}
            >
              <iframe 
              className="frame"
              title="video" 
              src={this.props.src}
              // src="https://player.vimeo.com/video/395326240?autoplay=true&controls=false&muted=true&loop=true" 
              width={this.state.width} 
              height={this.state.height}
              top="0"
              left={this.state.left}
              frameBorder="0" 
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen={true}
              fullscreen="true"
              allow="autoplay"
              />

              {this.state.showPlayerControls ? (
              <div>
                  <div className="films-exitVideo">
                    <FiXCircle id="exitControl"onClick={this.handleExit}/>

                  </div>
                <div style={{zIndex: 20, position: 'absolute', width: window.innerWidth - 160, marginRight: 80, marginLeft: 80, bottom: 60}}>

                  <div className="progressContainer">
                    <div className="films-timeContainer">
                      <text className="playbackTime" style={{color: '#d3d3d3'}}>{this.formatTime(this.state.playbackPosition)}</text>
                      <text className="playbackTime" style={{position: 'relative', right: '5', color: '#d3d3d3', float: 'right'}}>{this.formatTime(this.state.playbackLength)}</text>
                    </div>
                    <div>
                      <progress ref={this.myRef} id="seekbar" className="seekbar" value={this.state.playbackPosition} max={this.state.playbackLength}/>
                    </div>
                  </div>
                  <span className="films-maximizeVideo">
                    {this.state.isFull ? (
                      <FiMinimize className="maxControlAction" id="minControl" onClick={this.exitFull}/>

                    ): (
                      <FiMaximize className="maxControlAction" id="maxControl" onClick={this.goFull}/>

                    )}
                  </span>

                </div>
              </div>
              ) : null}
            </Fullscreen>
          </div>
        );
    }
}

