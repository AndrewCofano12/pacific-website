import React, { Component, Text, useCallback } from 'react';
import "./VideoPlayer.css"
import request from "../node/vimeoApi"
import Vimeo from '@vimeo/player'

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
        volume: 0,
        playbackPosition: 0,
        left: 0,
        showPlayerControls: false,
        playbackLength: 0
      }
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
      // window.addEventListener("mousedown", () => this.handlePlayPause(this.player))
      this.player.setVolume(this.state.volume)

      this.player.on('timeupdate', (event) => {
        this.setState({playbackPosition: event.seconds})
      })

      this.player.getDuration().then( (duration) => {
        this.setState({playbackLength: duration})
      });

      this.player.on('play', function() {
        console.log('Played the video');
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

    render() {
        return(
            <div style={{height: "100%", width: "100", display: "block", backgroundColor: 'black'}}>
              <iframe 
              className="frame"
              title="video" 
              src="https://player.vimeo.com/video/395326240?autoplay=true&controls=false&muted=true&loop=true" 
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
                <div style={{zIndex: 20, position: 'absolute', width: window.innerWidth - 160, marginRight: 80, marginLeft: 80, bottom: 60}}>
                  <text className="playbackTime" style={{color: '#d3d3d3'}}>{this.formatTime(this.state.playbackPosition)}</text>
                  <text className="playbackTime" style={{position: 'absolute', right: '0', color: '#d3d3d3'}}>{this.formatTime(this.state.playbackLength)}</text>
                  <progress ref={this.myRef} id="seekbar" className="seekbar" value={this.state.playbackPosition} max={this.state.playbackLength}/>
                </div>
              </div>
              ) : null}
            </div>
        );
    }
}

