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
const dbConfig = require("../config/db.config.js");
let base64 = require('base-64');


export default class Music extends Component {
  audioCtx = null;
  lowLag = null;

  context = null;
  buf = null;
  keyToSoundMap = {
     a: 'http://www.pacificfilm.co/wp-content/media/pM_Ep-3.mp3',
     s: 'http://www.pacificfilm.co/wp-content/audio/pM_Ep-2.mp3',
     d: 'audio/kick-808.wav',
     f: 'audio/openhat-808.wav',
     g: 'audio/kick-big.wav',
     h: 'audio/ride-acoustic01.wav',
     j: 'audio/snare-analog.wav',
     k: 'audio/tom-acoustic01.wav',
     l: 'audio/crash-acoustic.wav'
 };

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
    this.updateBackground = this.updateBackground.bind(this);
    this.playItem = this.playItem.bind(this);
    this.loadSound = this.loadSound.bind(this);
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


    } else {
      // play new item

      // const nowPlayingAudio = `http://www.pacificfilm.co/wp-content/media/${file}`
      // this.setState({ npFile: file, d });
      // this.audio.current.src = file;


      var audio = document.querySelector('audio');
      audio.src = file;
      var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      // var source = audioCtx.createMediaElementSource(audio);
      // this.audio.current.play();

      var analyser = audioCtx.createAnalyser();


      // Wait for window.onload to fire. See crbug.com/112368
      window.addEventListener('load', function(e) {      
        // Our <audio> element will be the audio source.
        var source = audioCtx.createMediaElementSource(audio);
        source.connect(analyser);
        analyser.connect(audioCtx.destination);
        // ...call requestAnimationFrame() and render the analyser's output to canvas.
      }, false);
      // Create a gain node
      // var gainNode = audioCtx.createGain();
      // gainNode.gain.value = 10;
      // source.connect(gainNode);
      // gainNode.connect(audioCtx.destination);
      // var buffersource = audioCtx.createBufferSource()
      // buffersource.start(0);  
        audio.play();


      console.log(audioCtx);
      this.updateBackground(backgroundColor)

    }
  }

  handlePause() {
    // pause current item
  }

  updateNowPlaying(itemName, playlist, index) {
    this.setState({npTitle: itemName, npPlaylist: playlist, npIndex: index});

  }




  componentDidMount () {
    // this.context = new (window.AudioContext || window.webkitAudioContext)();
    // this.playItem("http://www.pacificfilm.co/wp-content/audio/pM_Ep-3.mp3");
    
    // this.lowLag = new function() {
    //   this.someVariable = undefined;
    //   this.showNeedInit = function() {
    //     this.msg("this.lowLag: you must call lowLag.init() first!");
    //   }
    //   this.load = this.showNeedInit;
    //   this.play = this.showNeedInit;
    //   this.pause = this.showNeedInit;
    //   this.stop = this.showNeedInit;
    //   this.switch = this.showNeedInit;
    //   this.change = this.showNeedInit;
      
    //   this.audioContext = undefined;
    //   this.audioContextPendingRequest = {};
    //   this.audioBuffers = {};
    //   this.audioBufferSources = {};
    //   this.currentTag = undefined;
    //   this.currentPlayingTag = undefined;
    
    //   this.init = function() {
    //     this.msg("init audioContext");
    //     this.load = this.loadSoundAudioContext;
    //     this.play = this.playSoundAudioContext;
    //     this.pause = this.pauseSoundAudioContext;
    //     this.stop = this.stopSoundAudioContext;
    //     this.switch = this.switchSoundAudioContext;
    //     this.change = this.changeSoundAudioContext;
    
    //     if (!this.audioContext) {
    //       this.audioContext = new(window.AudioContext || window.webkitAudioContext)();
    //     }
    //   }
    
    //   //we'll use the tag they hand us, or else the url as the tag if it's a single tag,
    //   //or the first url 
    //   this.getTagFromURL = function(url, tag) {
    //     if (tag != undefined) return tag;
    //     return this.getSingleURL(url);
    //   }
    //   this.getSingleURL = function(urls) {
    //     if (typeof(urls) == "string") return urls;
    //     return urls[0];
    //   }
    //   //coerce to be an array
    //   this.getURLArray = function(urls) {
    //     if (typeof(urls) == "string") return [urls];
    //     return urls;
    //   }
    
    //   this.loadSoundAudioContext = function(urls, tag) {
    //     var url = this.getSingleURL(urls);
    //     tag = this.getTagFromURL(urls, tag);
    //     this.msg('webkit/chrome audio loading ' + url + ' as tag ' + tag);
    //     var request = new XMLHttpRequest();
    //     request.open('GET', url, true);
    //     request.responseType = 'arraybuffer';
    
    //     // Decode asynchronously
    //     request.onload = function() {
    //       // if you want "successLoadAudioFile" to only be called one time, you could try just using Promises (the newer return value for decodeAudioData)
    //       // Ref: https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData
    
    //       //Older callback syntax:
    //       //baseAudioContext.decodeAudioData(ArrayBuffer, successCallback, errorCallback);
    //       //Newer promise-based syntax:
    //       //Promise<decodedData> baseAudioContext.decodeAudioData(ArrayBuffer);
    
    
    //       // ... however you might want to use a pollfil for browsers that support Promises, but does not yet support decodeAudioData returning a Promise.
    //       // Ref: https://github.com/mohayonao/promise-decode-audio-data
    //       // Ref: https://caniuse.com/#search=Promise
    
    //       // var retVal = this.lowLag.audioContext.decodeAudioData(request.response);
    
    //       // Note: "successLoadAudioFile" is called twice. Once for legacy syntax (success callback), and once for newer syntax (Promise)
    //       var retVal = this.audioContext.decodeAudioData(request.response, successLoadAudioFile, errorLoadAudioFile);
    //       //Newer versions of audioContext return a promise, which could throw a DOMException
    //       if (retVal && typeof retVal.then == 'function') {
    //         retVal.then(successLoadAudioFile).catch(function(e) {
    //           errorLoadAudioFile(e);
    //           urls.shift(); //remove the first url from the array
    //           if (urls.length > 0) {
    //             this.loadSoundAudioContext(urls, tag); //try the next url
    //           }
    //         });
    //       }
    //     };
    
    //     request.send();
    
    //     function successLoadAudioFile(buffer) {
    //       this.audioBuffers[tag] = buffer;
    //       if (this.audioContextPendingRequest[tag]) { //a request might have come in, try playing it now
    //         this.playSoundAudioContext(tag);
    //       }
    //     }
    
    //     function errorLoadAudioFile(e) {
    //       this.msg("Error loading webkit/chrome audio: " + e);
    //     }
    //   }
    
    //   this.playSoundAudioContext = function(tag) {
    //     var context = this.audioContext;
    
    //     // if some audio is currently active and hasn't been switched, or you are explicitly asking to play audio that is already active... then see if it needs to be unpaused
    //     // ... if you've switch audio, or are explicitly asking to play new audio (that is not the currently active audio) then skip trying to unpause the audio
    //     if ((this.currentPlayingTag && this.currentTag && this.currentPlayingTag === this.currentTag) || (tag && this.currentPlayingTag && this.currentPlayingTag === tag)) {
    //       // find currently paused audio (suspended) and unpause it (resume)
    //       if (context !== undefined) {
    //         // ref: https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/suspend
    //         if (context.state === 'suspended') {
    //           context.resume().then(function() {
    //             this.msg("playSoundAudioContext resume " + this.currentPlayingTag);
    //             return;
    //           }).catch(function(e) {
    //             this.msg("playSoundAudioContext resume error for " + this.currentPlayingTag + ". Error: " + e);
    //           });
    //           return;
    //         }
    //       }
    //     }
        
    //     if (tag === undefined) {
    //       tag = this.currentTag;
    //     }
    
    //     if (this.currentPlayingTag && this.currentPlayingTag === tag) {
    //       // ignore request to play same sound a second time - it's already playing
    //       this.msg("playSoundAudioContext already playing " + tag);
    //       return;
    //     } else {
    //       this.msg("playSoundAudioContext " + tag);
    //     }
    
    //     var buffer = this.audioBuffers[tag];
    //     if (buffer === undefined) { //possibly not loaded; put in a request to play onload
    //       this.audioContextPendingRequest[tag] = true;
    //       this.msg("playSoundAudioContext pending request " + tag);
    //       return;
    //     }
    
    //     // need to create a new AudioBufferSourceNode every time... 
    //     // you can't call start() on an AudioBufferSourceNode more than once. They're one-time-use only.
    //     var source;
    //     source = context.createBufferSource(); // creates a sound source
    //     source.buffer = buffer; // tell the source which sound to play
    //     source.connect(context.destination); // connect the source to the context's destination (the speakers)
    //     source.loop = true;
    //     this.audioBufferSources[tag] = source;
    
    //     // find current playing audio and stop it
    //     var sourceOld = this.currentPlayingTag ? this.audioBufferSources[this.currentPlayingTag] : undefined;
    //     if (sourceOld !== undefined) {
    //       if (typeof(sourceOld.noteOff) == "function") {
    //         sourceOld.noteOff(0);
    //       } else {
    //         sourceOld.stop();
    //       }
    //       this.msg("playSoundAudioContext stopped " + this.currentPlayingTag);
    //       this.audioBufferSources[this.currentPlayingTag] = undefined;
    //       this.currentPlayingTag = undefined;
    //     }
    
    //     // play the new source audio
    //     if (typeof(source.noteOn) == "function") {
    //       source.noteOn(0);
    //     } else {
    //       source.start();
    //     }
    //     this.currentTag = tag;
    //     this.currentPlayingTag = tag;
        
    //     if (context.state === 'running') {
    //       this.msg("playSoundAudioContext started " + tag);
    //     } else if (context.state === 'suspended') {
    //       /// if the audio context is in a suspended state then unpause (resume)
    //       context.resume().then(function() {
    //         this.msg("playSoundAudioContext started and then resumed " + tag);
    //       }).catch(function(e) {
    //         this.msg("playSoundAudioContext started and then had a resuming error for " + tag + ". Error: " + e);
    //       });
    //     } else if (context.state === 'closed') {
    //       // ignore request to pause sound - it's already closed
    //       this.msg("playSoundAudioContext failed to start, context closed for " + tag);
    //     } else {
    //       this.msg("playSoundAudioContext unknown AudioContext.state for " + tag + ". State: " + context.state);
    //     }
    //   }
    
    //   this.pauseSoundAudioContext = function() {
    //     // not passing in a "tag" parameter because we are playing all audio in one channel
    //     var tag = this.currentPlayingTag;
    //     var context = this.audioContext;
    
    //     if (tag === undefined) {
    //       // ignore request to pause sound as nothing is currently playing
    //       this.msg("pauseSoundAudioContext nothing to pause");
    //       return;
    //     }
    
    //     // find currently playing (running) audio and pause it (suspend)
    //     if (context !== undefined) {
    //       // ref: https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/suspend
    //       if (context.state === 'running') {
    //         this.msg("pauseSoundAudioContext " + tag);
    //         context.suspend().then(function() {
    //           this.msg("pauseSoundAudioContext suspended " + tag);
    //         }).catch(function(e) {
    //           this.msg("pauseSoundAudioContext suspend error for " + tag + ". Error: " + e);
    //         });
    //       } else if (context.state === 'suspended') {
    //         // ignore request to pause sound - it's already suspended
    //         this.msg("pauseSoundAudioContext already suspended " + tag);
    //       } else if (context.state === 'closed') {
    //         // ignore request to pause sound - it's already closed
    //         this.msg("pauseSoundAudioContext already closed " + tag);
    //       } else {
    //         this.msg("pauseSoundAudioContext unknown AudioContext.state for " + tag + ". State: " + context.state);
    //       }
    //     }
    //   }
    
    //   this.stopSoundAudioContext = function() {
    //     // not passing in a "tag" parameter because we are playing all audio in one channel
    //     var tag = this.currentPlayingTag;
    
    //     if (tag === undefined) {
    //       // ignore request to stop sound as nothing is currently playing
    //       this.msg("stopSoundAudioContext nothing to stop");
    //       return;
    //     } else {
    //       this.msg("stopSoundAudioContext " + tag);
    //     }
    
    //     // find current playing audio and stop it
    //     var source = this.audioBufferSources[tag];
    //     if (source !== undefined) {
    //       if (typeof(source.noteOff) == "function") {
    //         source.noteOff(0);
    //       } else {
    //         source.stop();
    //       }
    //       this.msg("stopSoundAudioContext stopped " + tag);
    //       this.audioBufferSources[tag] = undefined;
    //       this.currentPlayingTag = undefined;
    //     }
    //   }
    
    //   this.switchSoundAudioContext = function(autoplay) {
    //     this.msg("switchSoundAudioContext " + (autoplay ? 'and autoplay' : 'and do not autoplay'));
    
    //     if (this.currentTag && this.currentTag == 'audio1') {
    //       this.currentTag = 'audio2';
    //     } else {
    //       this.currentTag = 'audio1';
    //     }
    
    //     if (autoplay) {
    //       this.playSoundAudioContext();
    //     }
    //   }
    
    //   this.changeSoundAudioContext = function(tag, autoplay) {
    //     this.msg("changeSoundAudioContext to tag " + tag + " " + (autoplay ? 'and autoplay' : 'and do not autoplay'));
    
    //     if(tag === undefined) {
    //       this.msg("changeSoundAudioContext tag is undefined");
    //       return;
    //     }
        
    //     this.currentTag = tag;
    
    //     if (autoplay) {
    //       this.playSoundAudioContext();
    //     }
    //   }
    
    //   this.msg = function(m) {
    //     m = "-- lowLag " + m;
    //     console.log(m);
    //   }
    // }
  

    // /*** PLEASE WORK ***/
    // this.lowLag.init();
    // this.lowLag.load(['http://www.pacificfilm.co/wp-content/audio/pM_Ep-3.mp3'], 'audio1');
    // // lowLag.load(['https://coubsecure-s.akamaihd.net/get/b173/p/coub/simple/cw_looped_audio/0d5adfff2ee/80432a356484068bb0e15/med_1550254045_med.mp3'], 'audio2');
    // // starts with audio1
    // this.lowLag.changeSoundAudioContext('audio1', false);





    if (!window.console) console = {
      log: function() {}
    };

    
    
    
    /** PLEASSEEEEEEE ***/

    // const AudioContext = window.AudioContext || window.webkitAudioContext;
    // this.audioContext = new AudioContext();

    this.updateCurrentSelected();
    this.updateView(false, null);

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



  

  componentWillReceiveProps(newProps) {
    console.log("Music will receive");
  }

  componentDidUpdate(prevProps, prevState) {
    this.updateCurrentSelected();
    console.log("SHOW COVER: " + this.showCover + " ... INDEX: " + this.itemIndex)
    
  }


  getData(src) {
    this.source = this.audioCtx.createBufferSource();
  
    var myRequest = new Request(src);
    console.log(src);
    fetch(myRequest).then(function(response) {
      return response.arrayBuffer();
    }).then(function(buffer) {
      this.audioCtx.decodeAudioData(buffer, function(decodedData) {
        this.source.buffer = decodedData;
        this.source.connect(this.audioCtx.destination);
      });
    });
  }
  
  // wire up buttons to stop and play audio
  
  playItem = (src) => {
    this.getData(src);
    this.source.start(0);
    // play.setAttribute('disabled', 'disabled');
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



/**
 * Load sound into AudioBuffer
 * @param url
 * @returns {Promise<AudioBuffer>}
 */
loadSound(url) {

//   let username = dbConfig.USER;
//   let password = dbConfig.PASSWORD;

// let headers = new Headers();

// //headers.append('Content-Type', 'text/json');
// headers.append('Authorization', 'Basic ' + base64.encode(username + ":" + password));


let headers = new Headers({
  'Content-Type': 'audio/mpeg',
  });
  console.log("loading...")
  console.log(dbConfig.USER)
  // const proxyurl = "https://cors-anywhere.pacificfilm.co/";
  return window.fetch(url, {method:'GET',
  headers: headers,
  mode: 'cors',
  credentials: 'same-origin', // include, *same-origin, omit
})
      .then(response => response.arrayBuffer())
      .then(arrayBuffer => {
        console.log("arraybuffer")
          return new Promise((resolve, reject) => {
              this.context.decodeAudioData(arrayBuffer, (buffer) => {
                  resolve(buffer);
              }, (e) => { reject(e); });
          })
      });
}

/**
* Initialize sound map
* @returns {Promise<void>}
*/
initSoundMap = async() => {
      await this.loadSound("http://www.pacificfilm.co/wp-content/audio/pM_Ep-3.mp3").then(audioBuffer => this.buf = audioBuffer);
}

/**
* Initialise app
* @returns {Promise<void>}
*/
init = async() => {
  console.log(this.context)
  // if (this.context) return;

  // window.AudioContext = window.AudioContext || window.webkitAudioContext;
  // this.context = new AudioContext();

  await this.initSoundMap();
}

/**
* Play Sound
* @param buffer
* @param time
*/
playSound = (buffer, time) => {
  console.log("play SOUND!!! " + typeof buffer )
  if (typeof buffer !== 'object') return;
  console.log("cmonnnn")
  const source = this.context.createBufferSource();
  source.buffer = buffer;  
  console.log(source.buffer);
  source.connect(this.context.destination);
  console.log(this.context)
  source.start(0);  
  this.unlockAudioContext(this.context);

};

/**
* Play sound and highlight the pressed
* @param letter
*/
processInteraction = async() => {
  console.log("processing...")
  await this.init()
  // Play audio
  const sound = document.querySelector(`audio[data-key=pM]`);
  if (!sound) return;
  console.log("audio contxt " + this.context)

  this.context
      ? this.playSound(this.buf)
      : sound.cloneNode().play();


  // Highlight button
};



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
              <div className="music-playlistNavigationContainer">

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
                      updateBackground={this.updateBackground}
                      updateView={this.updateView}
                      handlePlay={this.handlePlay}
                      updateNowPlaying={this.updateNowPlaying}
                      npItem={this.state.nowPlayingAudio}/>}
                      playItem={this.playItem} 
                      context={this.context}/>

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
                    npFile={this.state.npFile}
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
      {/* <button onClick={() => this.processInteraction()}>Cmon</button> */}
      <audio 
        ref={this.audio}
        // src={this.state.playing}
        preload="none"
        data-key="pM"
        controls={false}
        loop={false}
        autoPlay={false}
        />
        {/* <button onClick={this.audio.current.play}></button> */}
    </div>
      );  }
}