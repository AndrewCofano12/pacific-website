import React, { Component, Text, useCallback } from 'react';
import "./VideoPlayer.css"
import request from "../node/vimeoApi"
import Vimeo from '@vimeo/player'


export default class VideoPlayer extends Component {
    constructor(props) {
        super(props)
        
        let player 
        this.state = {seconds: 0,
          width: window.innerWidth,
          height: window.innerHeight,
          volume: .5
        }
    }

    handleResize() {
      // window shrinks horizontally
      const height = window.innerHeight
      const width = window.innerWidth
      
      // 16:9 aspect ratio
      if(height / width > .5625) {
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
              src="https://player.vimeo.com/video/395326240?autoplay=true&controls=false" 
              width={this.state.width} 
              height={this.state.height}
              top="0"
              left="0"
              frameborder="0" 
              webkitallowfullscreen 
              mozallowfullscreen 
              allowfullscreen
              fullscreen
              allow="autoplay"
              />
              <button onClick={() => this.handlePlayPause(this.player)} style={{position: 'absolute', top: 40, left: 100}}>Play/Pause</button>
              <button onClick={() => this.increaseVolume(this.player)} style={{zIndex: 20, position: 'absolute', top: 80, left: 100}}>Increase Volume</button>
              <button onClick={() => this.decreaseVolume(this.player)} style={{zIndex: 20, position: 'absolute', top: 120, left: 100}}>Decrease Volume</button>
                {/* <div style={{height: this.state.height, width: this.state.width}} id="video01_name"></div> */}
            </div>
        );
    }
}
