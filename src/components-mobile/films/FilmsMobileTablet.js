import React, { Component,  useState  } from 'react';
import NavigationHeader from '../../components/NavigationHeader';
import './FilmsMobile.css';
import Vimeo from "@vimeo/player";
import { text } from 'body-parser';

export default class FilmsMobileTablet extends Component {  
    videoPlayers = [];
    volume = 30;


  constructor(props) {
    super(props)
    this.state = {
      filmsObject: this.props.dbdata,
      playURL: ''
    }
  }

  componentDidMount() {
    var loopsArray = this.state.filmsObject.homeLoops;
    var random = Math.floor(Math.random() * loopsArray.length)
    var videoEL = document.querySelector("source");
    
    /** uncomment for our shit */
    videoEL.src = `http://www.pacificfilm.co/wp-content/videos/home-loops/${loopsArray[random].file}`;

    this.state.filmsObject.filmsEntries.map((entry, i) => {
      var idString = 'film'
      var options = {
          playsinline: false,
      }
      var videoPlayer = new Vimeo(`film${i}`, options);
      videoPlayer.setVolume(this.volume);
      this.videoPlayers.push(videoPlayer);
  });

    var header = document.getElementsByClassName("siteLogoContainer");
    // console.log(header[0].style.);
    var textContainer = document.getElementsByClassName("filmsMobile-linkContainer")[0];
    textContainer.style.offsetWidth = header[0].offsetWidth;
    // console.log(header[0].offsetWidth);
    textContainer.style.left = header[0].offsetLeft;

    // var options = {
    //   playsinline: false,
    //   autoPlay: true
    // }
    // this.videoPlayer = new Vimeo("filmsPlayer", options);
    // this.videoPlayer.setVolume(this.volume);


  }

  handlePlay = (i) => {
    // console.log(i)
    // console.log('film'+ i);
    if (this.videoPlayers[i].getCurrentTime() > 0) {
      // console.log("curentTime " + this.videoPlayers[i].getCurrentTime())
      this.videoPlayers[i].setCurrentTime(0)
    }
    this.videoPlayers[i].play();
    var iframe = document.getElementsByTagName('iframe')[i];
    var fullscreen = iframe.requestFullscreen || iframe.webkitRequestFullScreen || iframe.mozRequestFullScreen || iframe.msRequestFullscreen;
    fullscreen.call(iframe);
    var videoPs = this.videoPlayers;
    document.addEventListener('webkitfullscreenchange', (event) => {
      // document.fullscreenElement will point to the element that
      // is in fullscreen mode if there is one. If there isn't one,
      // the value of the property is null.
      if (document.fullscreenElement) {
        // console.log(`Element: ${document.fullscreenElement.id} entered full-screen mode.`);
      } else {
        // console.log(videoPs)
        // console.log("INDEX " + i)
        videoPs[i].pause();
        // console.log(videoPs)


        videoPs[i].setCurrentTime(0);
      }
    });
    document.addEventListener('fullscreenchange', (event) => {
      // document.fullscreenElement will point to the element that
      // is in fullscreen mode if there is one. If there isn't one,
      // the value of the property is null.
      if (document.fullscreenElement) {
        // console.log(`Element: ${document.fullscreenElement.id} entered full-screen mode.`);
      } else {
        // console.log(videoPs)
        // console.log("INDEX " + i)
        videoPs[i].pause();
        // console.log(videoPs)


        videoPs[i].setCurrentTime(0);
      }
    });
    document.addEventListener('mozfullscreenchange', (event) => {
      // document.fullscreenElement will point to the element that
      // is in fullscreen mode if there is one. If there isn't one,
      // the value of the property is null.
      if (document.fullscreenElement) {
        // console.log(`Element: ${document.fullscreenElement.id} entered full-screen mode.`);
      } else {
        // console.log(videoPs)
        // console.log("INDEX " + i)
        videoPs[i].pause();
        // console.log(videoPs)


        videoPs[i].setCurrentTime(0);
      }
    });
    document.addEventListener('msfullscreenchange', (event) => {
      // document.fullscreenElement will point to the element that
      // is in fullscreen mode if there is one. If there isn't one,
      // the value of the property is null.
      if (document.fullscreenElement) {
        // console.log(`Element: ${document.fullscreenElement.id} entered full-screen mode.`);
      } else {
        // console.log(videoPs)
        // console.log("INDEX " + i)
        videoPs[i].pause();
        // console.log(videoPs)


        videoPs[i].setCurrentTime(0);
      }
    });
    // document.getElementsByTagName('iframe')[i].web kitRequestFullScreen();
  }


  // handlePlay = (i) => {
  //   // console.log(i)
  //   // console.log('film'+ i);
    
  //   // var player = document.getElementById(`film${i}`);
  //   // console.log(player)
  //   this.setState({playURL: this.state.filmsObject.filmsEntries[i].src})
  //   console.log("play")
  //   const videoP = this.videoPlayer;
  //   this.videoPlayer.on("loaded", function() {
  //     console.log("loaded") 
  //     videoP.play()});

  // }

  render() {

    // console.log("this.props.entries is not null " + this.props.entries.id != null)

    // this.props.entries.map ((entry) => console.log(entry.id))
    // const [videoFilePath, setVideoFileURL] = useState(null);
    // const handleVideoUpload = (event) => {
    //   setVideoPath(URL.createObjectURL('../../public/test.MP4'));
    //   };
    
    return (
      <div className="filmsMobile-videoPlayer">



        <NavigationHeader formatString="lightFormat" page="visual"/>
        <video 
        playsInline
        autoPlay
        loop
        muted
        className="testVideo">

          <source type="video/mp4"/>

        </video>        
        {this.state.filmsObject.filmsEntries.map((entry, i) => {
          return (
            <div className="filmsPlayer" id={`film${i}`} data-vimeo-url={entry.src}></div>
          )
        })}
        <div className="filmsMobile-contentContainer">

        <div className="filmsMobile-linkContainer">

        {this.state.filmsObject.filmsEntries.map((entry, i) => {
            // console.log(`film${i}`);
            return (
                <div className="filmsMobile-filmSeletion" >
                    <div onClick={() => this.handlePlay(i)}>{entry.name}</div>
                </div>
            );
            })}
        </div>
        </div>

    </div>

    );
  }
}