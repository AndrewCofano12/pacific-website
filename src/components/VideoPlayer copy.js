import React, { Component, Text } from 'react';
import "./VideoPlayer.css"
import request from "../node/vimeoApi"
import Vimeo from '@vimeo/player'

export default class VideoPlayer extends Component {
    constructor(props) {
        super(props)
        
        let player 
        this.state = {seconds: 0}
    }
    

    componentDidMount() {    
        const iframe = document.querySelector('iframe');
        this.player = new Vimeo(iframe)
        this.player.on('progress', () => this.player.getCurrentTime().then((seconds) => {
            // console.log(seconds)
            this.setState({seconds: seconds})
        })); 
    }

    updateTime() {
        console.log("firing")
        this.player.getCurrentTime().then((seconds) => {
            console.log(seconds)
            // this.setState({seconds: seconds})
        }) 
        console.log("asdfasdf")
    }

    fuck = () => {
        if(this.player === null) {
            console.log("not here yet")
        } else {
            this.player.getPaused().then((paused) => {
                if(paused) {
                    this.player.play()
                } else {
                    this.player.pause()
                }
            })
        }
    }
        
    render() {
        
        return (
            <div className="videoPlayer">
                <button onClick={() => this.fuck()}>Activitate</button>
                <text style={{position: "absolute"}}>{this.state.seconds}</text>
                <iframe 
                style={{position: "fixed", top:"0", left: "0", bottom:"0", right:"0", width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999"}}
                position="absolute"
                    title="video"
                    src="https://player.vimeo.com/video/395326240?background=1&muted=0" 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen"/>
            </div>
        );
    }
        
}