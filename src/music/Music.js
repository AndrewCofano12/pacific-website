import React, { createRef, Component } from 'react';
import NavigationHeader from '../components/NavigationHeader';
import './MusicStyles.css';
// import PlaylistGridItem from './PlaylistGridItem';
import Playlist from './Playlist';
// import EpisodeSlider from './EpisodeSlider';
import { FaRegPlayCircle, FaRegPauseCircle} from 'react-icons/fa';
import { RiPlayCircleLine } from "react-icons/ri";
import $ from 'jquery';
import PlaylistCoverView from './PlaylistCoverView';
import { Route, Redirect, Link, useLocation } from 'react-router-dom';
//import './MusicScripts.js';


export default class Music extends Component {
  audioCtx = null;


  constructor(props) {
    super(props);
    this.state = {
        npFile: '',
        npPlaylist: null,
        npTitle: '',
        npIndex: null,
        isPlaying: false,
        musicObject: props.dbdata,
      
    };

    this.audio = createRef()
    this.audioContext = null;
    this.updateNowPlaying = this.updateNowPlaying.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.updateBackground = this.updateBackground.bind(this);
  }

  updateCurrentSelected() {
    const path = document.location.pathname;
    $('.music-playlistNavigationItem').each(function(i, obj) {
      const url = $(obj).data("url")
      if (path.indexOf(url) > 0) {
        $(obj).addClass("music-playlistNavigationItem-selected");
      }
      else {
        $(obj).removeClass("music-playlistNavigationItem-selected");

      }
    });
    
  }

  updateView = (cover, item) => {
    // console.log("UPDATE VIEW:   " + cover + " " + item)
    this.showCover = cover;
    this.itemIndex = item;
  }

  updateBackground(backgroundColor) {
    const BackgroundElement = document.querySelector('.music-musicBackground')
    BackgroundElement.style.cssText = "background-color: " + backgroundColor;

  }

  handleSpacebarPress = (event) => {
    if (event.keyCode == 32) {
      if (this.audio.current.paused) {
          this.audio.current.play();
          this.setState({isPlaying: true})
      }
      else {
        this.audio.current.pause();
        this.setState({isPlaying: false})

      }
    } 
  }

  
  // async handlePlay(playlistIndex, itemIndex) {
  handlePlay(itemName, playlist, index, file, backgroundColor) {
    // console.log(file);
    // if file is current one, resume playing
    if (this.state.npFile == file) {
      this.audio.current.play();
      this.setState({isPlaying: true})
    }

    // else, play new track
    else {
      // set state of npFile to file
      this.setState({npFile: file});
      this.setState({isPlaying: true})

      // console.log("playing new shit");
      // updateNowPlaying()
      this.updateNowPlaying(itemName, playlist, index)

      // set audio src & load
      this.audio.current.src = file;
      this.audio.current.load();    
      // console.log("playing new shit2 ");

      // set isLoading to true
      this.setState({isLoading: true});

      // play audio
      this.audio.current.play();

      // add event listener for timeupdate -- change background
      const audio = this.audio.current;
      const updateBg = this.updateBackground;
      const itemBgColor = backgroundColor;
      audio.addEventListener('timeupdate', function() {
        this.setState({isLoading: false});
        // console.log("playing...")
          updateBg(itemBgColor);

      }.bind(this))
      // console.log("playing new shit3");


      // remove event listener
      audio.removeEventListener('timeupdate', null);



    }
  }

  handlePause() {
    // console.log("pausing...")
    this.setState({isPlaying : false})
    const audio = this.audio.current
    audio.pause();
  }

  updateNowPlaying(itemName, playlist, index) {
    this.setState({npTitle: itemName, npPlaylist: playlist, npIndex: index});

  }

  unlockAudioContext(audioCtx) {
    if (audioCtx && audioCtx.state !== 'suspended') {
      return
    };      
    audioCtx.resume();
    const b = document.body;
    const events = ['touchstart','touchend', 'mousedown','keydown', 'click', 'play'];
    events.forEach(e => b.addEventListener(e, unlock, false));
    function unlock() { if (audioCtx) { audioCtx.resume().then();} }
    function clean() { events.forEach(e => b.removeEventListener(e, unlock)); }
  }

  componentDidMount () {
    this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    this.unlockAudioContext(this.audioCtx);

    // const AudioContext = window.AudioContext || window.webkitAudioContext;
    // this.audioContext = new AudioContext();

    this.updateCurrentSelected();
    this.updateView(false, null);

    // audio player object
    const audio = this.audio.current

    window.addEventListener("keyup", this.handleSpacebarPress.bind(this));


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
    // audio.addEventListener('pause', this.handlePause)

    // audio.addEventListener(
    //   'timeupdate',
    //   throttle((e) => {
    //     this.props.onListen && this.props.onListen(e)
    //   }, this.props.listenInterval)
    // )
    
    
  }

  componentDidUpdate(prevProps, prevState) {
    this.updateCurrentSelected();
    // console.log("SHOW COVER: " + this.showCover + " ... INDEX: " + this.itemIndex)
    
  }
  render() {
    let firstPlaylist = this.state.musicObject.playlists[0];
    
    // console.log(this.state.musicObject)
    return (
      <div className="music-musicBackground" style={{backgroundColor: this.state.musicObject.homeColor}}>
        <NavigationHeader className="" formatString="lightFormat" page="music"/>
        {/* <EpisodeSlider episodes={this.state.musicObject.episodes}/> */}


        {/* Container for entire page/content */}
        <div className="music-mainContainer">
        


          {/* MusicNavigationContainer : Sidebar for Now Playing & Playlist Navigation  */}
          <div className="music-musicNavigationContainer">

              {/* Now Playing Container  */}
              <div className="music-navSub music-nowPlayingContainer">

                {/* Now Playing Indicator*/}
                <div className="music-nowPlayingIndictator">
                  now playing
                </div>

                {/* Now Playing Title */}
                {/* <NowPlaying/> */}
                <Link className="music-nowPlayingLink" to={{pathname: `${this.props.match.path}/${this.state.npPlaylist}/view`, 
                                state: {
                                  fromLink: true,
                                  fromNp: true,
                                  showCover: true,
                                  showCoverIndex: this.state.npIndex
                                }}}>
                <div className="music-nowPlayingTitle">
                  {this.state.npTitle}
                </div>
                </Link>

              </div>


              {/* Playlist Navigation Container */ }
              <div className="music-navSub music-playlistNavigationContainer">

                {/* Playlist Navigation Item Container */}
                {this.state.musicObject.playlists.map((playlist,i) => {
                    return (
                      <Link to={{pathname: `${this.props.match.path}/${playlist.url}`, 
                                state: {
                                  fromLink: true,
                                  showCover: false
                                }}}>
                        <div data-url={playlist.url} className="music-link music-playlistNavigationItem">
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
                <div>
                  <Route exact path={`${this.props.match.path}/${playlist.url}`} render={(props) => 
                    <Playlist {...props} 
                      npTitle={this.state.npTitle}
                      showCover={this.showCover}
                      atIndex={this.itemIndex}
                      matchURL={this.props.match.path} 
                      playlistKey={i} 
                      playlistData={playlist} 
                      linkPrefix={this.props.match.path} 
                      audioRef={this.audio} 
                      onPlay={this.handlePlay} 
                      onPause={this.handlePause} 
                      isPlaying={this.state.isPlaying}
                      updateBackground={this.updateBackground}
                      updateView={this.updateView}
                      updateNowPlaying={this.updateNowPlaying}
                      npItem={this.state.nowPlayingAudio}/>}
                      playItem={this.playItem} />

                  <Route path={`${this.props.match.path}/${playlist.url}/view`} render={(props) => 
                    <PlaylistCoverView 
                    {...props} 
                    npTitle={this.state.npTitle}
                    playlistKey={i}
                    playlistLink={playlist.url} 
                    selectedIndex={this.state.viewIndex} 
                    playlistData={playlist} 
                    audioRef={this.audio} 
                    onPlay={this.handlePlay} 
                    onPause={this.handlePause}
                    isPlaying={this.state.isPlaying}
                    npFile={this.state.npFile}
                    npTitle={this.state.npTitle}
                    updateView={this.updateView}
                    updateNowPlaying={this.updateNowPlaying}
                    updateBackground={this.updateBackground}/>}/>
              </div>
                        )
               }
             )}               

          </div>
          {/* <div className="music-spacerContainer"></div> */}
      </div>
      <audio 
        ref={this.audio}
        // src="http://www.pacificfilm.co/wp-content/media/pM_Ep-3.mp3"
        preload="none"
        controls={false}
        loop={false}
        autoPlay={false}
        />
    </div>
      );  }
}