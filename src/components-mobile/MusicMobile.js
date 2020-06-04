import React, { Component } from 'react';
import NavigationHeader from '../components/NavigationHeader';
import './MusicMobile.css';
import ScrollingColorBackground from 'react-scrolling-color-background';


export default class Music extends Component {
  render() {
    
    return (
      <div>
        <NavigationHeader formatString="lightFormat" page="music"/>
        <ScrollingColorBackground
        selector='.js-color-stop[data-background-color]'
        colorDataAttribute='data-background-color'
        initialRgb='rgb(0, 0, 0)'/>
        <div className="episodeSectionContainer">
        <section
        data-background-color='rgb(141, 150, 146)'
        className='js-color-stop episodeSection'
        id="episode3Container">
            <div className="episodeContainer">
                <div className="artworkWrapper">
                    <img draggable="false" className="coverImage noselect" src={require("../images/ep3-front.jpg")} alt="fuck"/>
                </div>
                <div className="linkContainer">
                    <a href="https://soundcloud.com/pacificstudios/not-a-virus">listen on SoundCloud</a>
                </div>
            </div>
        </section>

        <section
        data-background-color='rgb(201, 194, 187)'
        className='js-color-stop episodeSection'
        id="episode2Container">
            <div className="episodeContainer">
                <div className="artworkWrapper">
                    <img draggable="false" className="coverImage noselect" src={require("../images/ep2-front.jpg")} alt="fuck"/>
                </div>
                <div className="linkContainer">
                    <a href="https://soundcloud.com/pacificstudios/pacific-music-ep-2">listen on SoundCloud</a>
                </div>  
            </div>
        </section>
        <section
        data-background-color='rgb(200, 201, 187)'
        className='js-color-stop episodeSection'
        id="episode1Container">
            <div className="episodeContainer">
                <div className="artworkWrapper">
                    <img draggable="false" className="coverImage noselect" src={require("../images/ep1-cover.png")} alt="fuck"/>
                </div>
                <div className="linkContainer">
                <a href="https://soundcloud.com/pacificstudios/pacific-music-ep-1">listen on SoundCloud</a>
                </div>  
            </div>
        </section>
        </div>
        </div>

      );  }
}
