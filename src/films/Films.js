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
        <VideoPlayer/>
        
      </div>
    );
  }
}
