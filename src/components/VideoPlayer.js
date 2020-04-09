import React, { Component, Text, useCallback } from 'react';
import "./VideoPlayer.css"
import request from "../node/vimeoApi"
import Vimeo from '@vimeo/player'


export default class VideoPlayer extends Component {
    constructor(props) {
        super(props)
        
        let player 
        this.state = {
          seconds: 0,
          width: window.innerWidth,
          height: window.innerHeight,
          volume: .5,
          playbackPosition: 0,
          left: 0
        }
    }

    handleResize() {
      // window shrinks horizontally
      const height = window.innerHeight
      const width = window.innerWidth
      
      // 16:9 aspect ratio
      if(height / width > .5625) {
        console.log(this.state.left + (this.state.width - width) * -.5)
        this.setState({left: this.state.left + (this.state.width - width) * -.5})
        this.setState({width: height / .5625, height: height }) //shrink horizontally
        
      } else {
        this.setState({width: width, height: width *.5625 }) //shrink vertically
      }
    }

    componentDidMount() {  
      this.handleResize()
      window.addEventListener("resize", this.handleResize.bind(this))
      var iframe = document.querySelector('iframe');
      this.player = new Vimeo(iframe)
      this.player.setVolume(this.state.volume)

      // var playerr = document.getE('video')
      this.player.on('timeupdate', (event) => {
        this.setState({playbackPosition: event.seconds})
        // console.log(this.state.playbackPosition)
      })

      this.player.on('play', function() {
        console.log('Played the video');
      });
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
              title="video" 
              src="https://player.vimeo.com/video/395326240?autoplay=true&controls=false&muted=true" 
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
              <button onClick={() => this.handlePlayPause(this.player)} style={{position: 'absolute', top: 40, left: 100}}>Play/Pause</button>
              <button onClick={() => this.increaseVolume(this.player)} style={{zIndex: 20, position: 'absolute', top: 80, left: 100}}>Increase Volume</button>
              <button onClick={() => this.decreaseVolume(this.player)} style={{zIndex: 20, position: 'absolute', top: 120, left: 100}}>Decrease Volume</button>
              {/* <input style={{position: 'absolute', bottom: 50, left: 100, right: 100}} type="range" min="1" max="100" value={this.state.playbackPosition} className="slider" id="myRange"></input> */}
              {/* <input type="range" value="50" max="100"></input>
              <progress value="50" max="100"></progress> */}
            </div>
        );
    }
}
