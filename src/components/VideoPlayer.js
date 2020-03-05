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
        // const iframe = document.querySelector('iframe');
        // this.player = new Vimeo(iframe)
        // this.player.on('progress', () => this.player.getCurrentTime().then((seconds) => {
        //     // console.log(seconds)
        //     this.setState({seconds: seconds})
        // })); 
        var options01 = {
            id: "https://player.vimeo.com/video/395326240?background=1&muted=0",
            width: window.width,
            height: window.height
          };
        //   var options02 = {
        //     url: {video02_url},
        //     width: {video02_width}
        //   };
      
          var video01Player = new Vimeo('video01_name', options01);
        //   var video02Player = new Vimeo.Player('{video02_name}', options02);
      
          video01Player.setVolume(0);
        //   video02Player.setVolume(0);
      
          video01Player.on('play', function() {
            console.log('Played the first video');
          });

        //   video01Player.
    }

    // updateTime() {
    //     console.log("firing")
    //     this.player.getCurrentTime().then((seconds) => {
    //         console.log(seconds)
    //         // this.setState({seconds: seconds})
    //     }) 
    //     console.log("asdfasdf")
    // }

    // fuck = () => {
    //     if(this.player === null) {
    //         console.log("not here yet")
    //     } else {
    //         this.player.getPaused().then((paused) => {
    //             if(paused) {
    //                 this.player.play()
    //             } else {
    //                 this.player.pause()
    //             }
    //         })
    //     }
    // }
        
    render() {

       

        return(
            <div>
                <div id="video01_name"></div>
            </div>
        );
    //     return (
    //         // <div className="videoPlayer">
    //         <div class="video-background">
    // <div class="video-foreground">
    //             {/* <button onClick={() => this.fuck()}>Activitate</button> */}
    //             {/* <text style={{position: "absolute"}}>{this.state.seconds}</text> */}
    //             <iframe 
    //             // position="absolute"
    //                 title="video"
    //                 src="https://player.vimeo.com/video/395326240?background=1&muted=0" 
    //                 // width={window.width} 
    //                 // height={window.height} 
    //                 // left="0"
    //                 // top="0"
    //                 // right="auto"
    //                 frameBorder="0" 
    //                 allow="autoplay; fullscreen"/>
    //         </div>
    //         </div>
            
    //     );
    }
        
}