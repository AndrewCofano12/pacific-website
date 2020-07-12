import React, { Component } from 'react';
import NavigationHeader from '../components/NavigationHeader';
import './MusicStyles.css';
import PlaylistGridItem from './PlaylistGridItem';
import Playlist from './Playlist';
import EpisodeSlider from './EpisodeSlider';
import { FaRegPlayCircle, FaRegPauseCircle} from 'react-icons/fa';
import { RiPlayCircleLine } from "react-icons/ri";
import $ from 'jquery';
import PlaylistCoverView from './PlaylistCoverView';
import { Route, Redirect, Link, useLocation } from 'react-router-dom';
//import './MusicScripts.js';


export default class Music extends Component {
  constructor(props) {
    super(props);
    this.state = {
        nowPlayingPlayer: null,
        nowPlayingTitle: null,
        musicObject: props.dbdata
    };
    this.updateNowPlaying = this.updateNowPlaying.bind(this);
  }

  updateCurrentSelected() {
    const path = document.location.pathname;
    $('.music-playlistNavigationItem').each(function(i, obj) {
      // console.log($(obj).data())
      if ($(obj).data("url") == path) {
        $(obj).addClass("music-playlistNavigationItem-selected");
      }
      else {
        $(obj).removeClass("music-playlistNavigationItem-selected");

      }
    });
    
  }

  updateNowPlaying(playerObject) {
    this.setState({nowPlayingPlayer: playerObject});
    /* Pass this function to Playlist, then PlaylistCoverView. When player is started, 
     replace nowPlayingObject with the currently playing player (so when current Playlist is unmounted, audio doesn't stop).
     Then give PlaylistGridItem a ref to the audio player so it can play & pause.
     Still need to figure out how to start audio from GridItem (maybe a callback function?).
     
     Thought: the only functional AudioPlayer exists within Music. As you render sub components (PlaylistGridItem, PlaylistCoverView),
     replace the AudioPlayer in that component with the currently playing one.
    */ 
  }

  componentDidMount () {
    
    // $('html, body').css('overflow', 'hidden'); 
    // const path = document.location.pathname;
    // this.setState({})
    // console.log(path);
    this.updateCurrentSelected();
  }

  componentDidUpdate() {
    this.updateCurrentSelected();
  }


  render() {
    let firstPlaylist = this.state.musicObject.playlists[0];
    // console.log(this.state.musicObject)
    return (
      <div className="music-musicBackground" style={{backgroundColor: firstPlaylist.items[0].backgroundColor}}>
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
                <Link className="music-nowPlayingLink" to={{pathname: `${this.props.match.path}/episodes`, 
                                state: {
                                  fromLink: true,
                                  showCover: true,
                                  showCoverIndex: 1
                                }}}>
                <div className="music-nowPlayingTitle">
                  pacific music ep. 2
                </div>
                </Link>

              </div>


              {/* Playlist Navigation Container */ }
              <div className="music-playlistNavigationContainer">

                {/* Playlist Navigation Item Container */}
                {/* <div className="music-playlistNavigationItemContainer"> */}
                {this.state.musicObject.playlists.map((playlist,i) => {
                    return (
                      <Link to={{pathname: `${this.props.match.path}/${playlist.url}`, 
                                state: {
                                  fromLink: true,
                                  showCover: false
                                }}}>
                        <div data-url={`/music/${playlist.url}`} className="music-playlistNavigationItem">
                          {playlist.playlistName}
                        </div>
                      </Link>
                      )
                  }
                  )} 

                {/* </div> */}
              </div>

          </div>

          {/* Playlist Content Container : Container for playlist grid/cover view */}
          <div className="music-playlistContentContainer">
            {/* Default route redirects to top most playlist */}
            <Route
              exact path={this.props.match.path}
              render={() => {
                  return (
                      <Redirect to={`${this.props.match.path}/${firstPlaylist.url}`} />
                  )
              }}
            />
             {this.state.musicObject.playlists.map((playlist,i) => {
                 return (
                   <Route path={`${this.props.match.path}/${playlist.url}`} render={(props) => <Playlist {...props} showCover={false} atIndex={null} playlistData={playlist} linkPrefix={this.props.match.path}/>} />
                 )
               }
             )}               

          </div>

      </div>
    </div>
      );  }
}