import React, { Component } from 'react';
import NavigationHeader from '../components/NavigationHeader';
import './MusicStyles.css';
import PlaylistGridItem from './PlaylistGridItem';
import EpisodeSlider from './EpisodeSlider';
import { FaRegPlayCircle, FaRegPauseCircle} from 'react-icons/fa';
import { RiPlayCircleLine } from "react-icons/ri";
import $ from 'jquery';
import PlaylistCoverView from './PlaylistCoverView';
import { Route } from 'react-router';
//import './MusicScripts.js';

export default class Music extends Component {
  constructor(props) {
    super(props);
    this.state = {
        musicObject: props.dbdata,
    };
  }

  componentDidMount () {
    
    // $('html, body').css('overflow', 'hidden');   
  }


  render() {
    let firstPlaylist = this.state.musicObject.playlist[0];
    // console.log(this.state.musicObject)
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
            {/* Default route redirects to top most playlist */}
            <Route
              exact path={this.props.match.path}
              render={() => {
                  return (
                      <Redirect to={`/${firstPlaylist.url}`} />
                  )
              }}
            />
            {this.state.musicObject.playlists.map((playlist,i) => {
                return (
                  <Route path={`${this.props.match.path}/${playlist.url}`} render={(props) => <Playlist {...props} playlistData={playlist} linkPrefix={this.props.match.path}/>} />
                )
              }
            )}

            {/* Playlist Grid Item */}
            {false ? (            
              <div className="music-playlistGridView">
                {this.state.musicObject.episodes.map((episode,i) => {
                  return (
                    <PlaylistGridItem key={i} itemData={episode}/>
                  )
                })}
              </div>
              ) : null}

            {/* Playlist Cover View */}
            <div className="music-playlistCoverView">
                {/* <EpisodeSlider episodes={this.state.musicObject.episodes}/> */}
                <PlaylistCoverView playlistData={this.state.musicObject.episodes}/>
            </div>
              

          </div>

      </div>
    </div>
      );  }
}