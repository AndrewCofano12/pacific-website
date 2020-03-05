import React, { Component } from 'react';
import NavigationHeader from '../components/NavigationHeader';
import './Films.css'
import Iframe from 'react-iframe'
import VideoPlayer from '../components/VideoPlayer'
import request from "../node/vimeoApi"
let Vimeo = require('vimeo').Vimeo;

export default class Films extends Component {

  

  
  
  
  render() {
    
    return (
      <div className="videoPlayer">
        <NavigationHeader formatString="lightFormat" page="films"/>
        {/* <Iframe url="https://player.vimeo.com/video/76979871?background=1&muted=0"
        width="100%"
        height="100%"
        id="myId"
        className="myClassname"
        display="initial"
        frameBorder="0"
        allow="autoplay; fullscreen"
        position="absolute"/> */}
        <VideoPlayer/>
        
      </div>
    );
  }
}
