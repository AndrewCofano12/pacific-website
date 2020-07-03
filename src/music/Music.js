import React, { Component } from 'react';
import NavigationHeader from '../components/NavigationHeader';
import './MusicStyles.css';
import EpisodeSlider from './EpisodeSlider';
import { FaRegPlayCircle, FaRegPauseCircle} from 'react-icons/fa';
import $ from 'jquery';
//import './MusicScripts.js';

export default class Music extends Component {
  constructor(props) {
    super(props);
    this.state = {
        musicObject: props.dbdata
    };
  }

  // componentDidMount () {
  //   $('html, body').css('overflow', 'hidden');   
  // }


  render() {
    console.log(this.state.musicObject)
    return (
      <div className="music-musicBackground" style={{backgroundColor: this.state.musicObject.episodes[0].backgroundColor}}>
        <NavigationHeader formatString="lightFormat" page="music"/>
        {/* <EpisodeSlider episodes={this.state.musicObject.episodes}/> */}


        {/* Container for entire page/content */}
        <div className="music-mainContainer">
        


          {/* MusicNavigationContainer : Sidebar for Now Playing & Playlist Navigation  */}
          <div className="music-musicNavigationContainer">

              {/* Now Playing Container  */}
              <div className="music-nowPlayingContainer">

                {/* Now Playing Indicator*/}
                <div className="music-nowPlayingIndictator">
                  now playing
                </div>

                {/* Now Playing Title */}
                <div className="music-nowPlayingTitle">
                  mvsic shit vol. 1
                </div>

              </div>


              {/* Playlist Navigation Container */ }
              <div className="music-playlistNavigationContainer">

                {/* Playlist Navigation Item Container */}
                {/* <div className="music-playlistNavigationItemContainer"> */}
                  
                  <div className="music-playlistNavigationItem music-playlistNavigationItem-selected">
                    episodes
                  </div>
                  <div className="music-playlistNavigationItem">
                    mvsic shit
                  </div>

                {/* </div> */}
              </div>

          </div>

          {/* Playlist Content Container : Container for playlist grid/cover view */}
          <div className="music-playlistContentContainer">

            {/* Playlist Grid */}
            <div className="music-playlistGrid">

              {/* Playlist Grid Item */}
              <div id="ep3" className="music-playlistGridItem">

                {/* Grid Item Cover */}
                <div className="music-gridItemCover">

                  {/* <img draggable="false" className="music-artwork music-coverImage music-noselect" src={require('../images/music/' + this.state.episode.frontArtwork)} alt="fuck"/> */}
                  <img draggable="false" className="music-gridItemImage music-noselect" src={require('../images/music/03-front.jpg')} alt="fuck"/>
                  
                  {/* Grid Item Playback Control */}  
                  <div id="ep3-control"  className="music-gridItemPlaybackControl">
                    <FaRegPlayCircle className="music-playControlAction" id="music-playControl"/>

                  </div>
               
                
                </div>

              </div>

              {/* Playlist Grid Item */}
              <div id="ep2" className="music-playlistGridItem">

                {/* Grid Item Cover */}
                <div className="music-gridItemCover">

                  {/* <img draggable="false" className="music-artwork music-coverImage music-noselect" src={require('../images/music/' + this.state.episode.frontArtwork)} alt="fuck"/> */}
                  <img draggable="false" className="music-gridItemImage music-noselect" src={require('../images/music/02-front.JPG')} alt="fuck"/>
                  
                  {/* Grid Item Playback Control */}  
                  <div id="ep2-control" className="music-gridItemPlaybackControl">
                    <FaRegPlayCircle className="music-playControlAction" id="music-playControl"/>

                  </div>

                </div>

              </div>

              {/* Playlist Grid Item */}
              <div id="ep1" className="music-playlistGridItem">

                {/* Grid Item Cover */}
                <div className="music-gridItemCover">
                  
                  {/* <img draggable="false" className="music-artwork music-coverImage music-noselect" src={require('../images/music/' + this.state.episode.frontArtwork)} alt="fuck"/> */}
                  <img draggable="false" className="music-gridItemImage music-noselect" src={require('../images/music/01-front.png')} alt="fuck"/>
                  
                  {/* Grid Item Playback Control */}  
                  <div id="ep1-control" className="music-gridItemPlaybackControl">
                    <FaRegPlayCircle className="music-playControlAction" id="music-playControl"/>

                  </div>

                </div>

              </div>


            </div>




          </div>



        </div>

      </div>
      );  }
}