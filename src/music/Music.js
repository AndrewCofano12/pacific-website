import React, { Component } from 'react';
import NavigationHeader from '../components/NavigationHeader';
import Iframe from 'react-iframe';
import './MusicStyles.css';
import ReactAudioPlayer from 'react-audio-player';
import EpisodeSlider from './EpisodeSlider';
import SimpleSlider from './SimpleSlider';


export default class Music extends Component {
  render() {
    
    return (
      <div className="musicBackground" style={{
        msOverflowStyle: "none",
        overflow: "scroll",
      }}>
        <NavigationHeader/>
        <EpisodeSlider/>
        {/* <div className="sliderContainer">
          <SimpleSlider/>
        </div> */}
      </div>
        // <div className="musicBackground">
        // <NavigationHeader/>
        // <div className="artworkWrapper">

        //   <div className="coverContainer flex-item">
        //     <img className="coverImage" src={require("../images/ep2-front.jpg")} alt="fuck"/>
        //   </div>
        //   <div className="tracklistContainer flex-item">
        //     <img className="tracklistImage" src={require("../images/ep2-back.jpg")} alt="fuck"/>
        //   </div>
        // </div>
        // </div>
      );  }
}


//<iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/488459001&color=%23c5d1ca&inverse=false&auto_play=false&show_user=true"></iframe>
        // <Iframe url="https://player.vimeo.com/video/76979871?background=1?controls=0"
        //   width="10000px"
        //   height="10000px"
        //   frameborder="0" allow="autoplay; fullscreen" allowfullscreen />
        //    <ReactAudioPlayer
        //     src="../../EP_3_VIDEO_MIX"
        //     controls
        //     /> 
