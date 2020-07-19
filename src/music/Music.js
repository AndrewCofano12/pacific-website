import React, { createRef, Component } from 'react';
import NavigationHeader from '../components/NavigationHeader';
import './MusicStyles.css';
import PlaylistGridItem from './PlaylistGridItem';
import Playlist from './Playlist';
// import EpisodeSlider from './EpisodeSlider';
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
        nowPlayingAudio: null,
        npPlaylist: null,
        npItem: '',
        npIndex: null,
        nowPlayingTitle: null,
        isPlaying: false,
        musicObject: props.dbdata,
        currentView: {
          showCover: false,
          item: null,
        }
      
    };
    this.showCover = false;
    this.itemIndex = 2;
    this.audio = createRef()

    this.updateNowPlaying = this.updateNowPlaying.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.updateBackground = this.updateBackground.bind(this);
    // this.updateView = this.updateView.bind(this);
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

  updateView = (cover, item) => {
    console.log("UPDATE VIEW:   " + cover + " " + item)
    this.showCover = cover;
    this.itemIndex = item;
  }

  updateBackground(backgroundColor) {
    const BackgroundElement = document.querySelector('.music-musicBackground')
    BackgroundElement.style.cssText = "background-color: " + backgroundColor;

  }


  
  // async handlePlay(playlistIndex, itemIndex) {
  handlePlay(file, backgroundColor) {
    console.log(file);
    if (this.state.isPlaying) {
      //if (this.state.npPlaylist == playlistIndex && this.state.npItem == itemIndex) {
      
        // resume current item
        // pause currently playing item
        // play new item
        //let file = this.state.musicObject.playlists[playlistIndex].items[itemIndex].file;
        // const resolve = () => import('../audio/' + file);
        // const { default: nowPlayingAudio} = await resolve();
        // this.setState({ nowPlayingAudio });
        // this.forceUpdate()

        // this.audio.current.play();
    } else {
      // play new item
      //console.log("Hitting " + this.state.musicObject.playlists[playlistIndex]);
      //let file = this.state.musicObject.playlists[playlistIndex].items[itemIndex].file;
      // const resolve = () => import('../audio/' + file);
      const nowPlayingAudio = `http://www.pacificfilm.co/wp-content/media/${file}`
      this.setState({ nowPlayingAudio });
      this.handleColorOnSliderChange(backgroundColor)
      // this.forceUpdate()

      // this.audio.current.play();

    }
    // const resolve = () => import('../audio/test.mp3');
    // const { default: nowPlayingAudio} = await resolve();
    // this.setState({ nowPlayingAudio });

  }

  handlePause() {
    // pause current item
  }

  updateNowPlaying(itemName, playlist, index) {
    this.setState({npItem: itemName, npPlaylist: playlist, npIndex: index});
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

    //this.handlePlay(0,0)



    // force update to pass this.audio to child components
    // this.forceUpdate()
    // audio player object
    const audio = this.audio.current

     // When enough of the file has downloaded to start playing
     audio.addEventListener('canplay', (e) => {
      this.props.onCanPlay && this.props.onCanPlay(e)
    })

    // When enough of the file has downloaded to play the entire file
    audio.addEventListener('canplaythrough', (e) => {
      this.props.onCanPlayThrough && this.props.onCanPlayThrough(e)
    })

    // When audio play starts
    //audio.addEventListener('play', this.handlePlay)

    // When unloading the audio player (switching to another src)
    audio.addEventListener('abort', this.handleAbort)

    // When the file has finished playing to the end
    audio.addEventListener('ended', (e) => {
      this.props.onEnded && this.props.onEnded(e)
    })

    // When the user pauses playback
    audio.addEventListener('pause', this.handlePause)

    // audio.addEventListener(
    //   'timeupdate',
    //   throttle((e) => {
    //     this.props.onListen && this.props.onListen(e)
    //   }, this.props.listenInterval)
    // )
    
    
  }

  componentDidUpdate(prevProps, prevState) {
    this.updateCurrentSelected();
    console.log("SHOW COVER: " + this.showCover + " ... INDEX: " + this.itemIndex)
    
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
                {/* <NowPlaying/> */}
                <Link className="music-nowPlayingLink" to={{pathname: `${this.props.match.path}/${this.state.npPlaylist}`, 
                                state: {
                                  fromLink: true,
                                  showCover: true,
                                  showCoverIndex: this.state.npIndex
                                }}}>
                <div className="music-nowPlayingTitle">
                  {this.state.npItem}
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
                        <div data-url={`/music/${playlist.url}`} className="music-link music-playlistNavigationItem">
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
                  <Route path={`${this.props.match.path}/${playlist.url}`} render={(props) => 
                    <Playlist {...props} 
                      showCover={this.showCover}
                      atIndex={this.itemIndex} 
                      playlistKey={i} 
                      playlistData={playlist} 
                      linkPrefix={this.props.match.path} 
                      audioRef={this.audio} 
                      onPlay={this.handlePlay} 
                      onPause={this.handlePause} 
                      updateBackground={this.updateBackground}
                      updateView={this.updateView}
                      updateNowPlaying={this.updateNowPlaying}
                      npFile={this.state.npFile}/>} />
                 )
               }
             )}               

          </div>

      </div>
      <audio 
        ref={this.audio}
        src={this.state.nowPlayingAudio}
        // src="http://www.pacificfilm.co/wp-content/media/pM_Ep-3.mp3"
        preload="auto"
        controls={false}
        loop={false}
        autoPlay={false}
        />
    </div>
      );  }
}