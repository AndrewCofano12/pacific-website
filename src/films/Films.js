import React, { Component,  useState  } from 'react';
import NavigationHeader from '../components/NavigationHeader';
import './Films.css'
import Iframe from 'react-iframe'
import VideoPlayer from '../components/VideoPlayer'
import request from "../node/vimeoApi"
import { Link } from 'react-router-dom';  


let Vimeo = require('vimeo').Vimeo;

export default class Films extends Component {  


  constructor(props) {
    super(props)
    this.state = {
      entries: this.props.entries,
      loops:this.props.loops
    }
  }


  componentDidMount() {
    var loopsArray= this.state.loops;
    var random = Math.floor(Math.random() * loopsArray.length)
    var videoEL = document.querySelector("video");
    /** uncomment for our shit */
    videoEL.src = `https://www.pacificfilm.co/wp-content/videos/home-loops/${loopsArray[random].file}`;
  }

  render() {

    // console.log("this.props.entries is not null " + this.props.entries.id != null)

    // this.props.entries.map ((entry) => console.log(entry.id))
    // const [videoFilePath, setVideoFileURL] = useState(null);
    // const handleVideoUpload = (event) => {
    //   setVideoPath(URL.createObjectURL('../../public/test.MP4'));
    //   };
    
    return (
      <div className="videoPlayer">
        <NavigationHeader formatString="lightFormat" page="visual"/>
        <video 
        className="testVideo"
        autoPlay={true}
        loop={true} 
        muted={true}
        >

        </video> 
        
        <div className="films-linkContainer" >
        {this.state.entries.map((entry, i) => {
            return (
              <div className="filmSeletion">
                <Link to={`${this.props.linkPrefix}/${entry.id}`} >
                  <text>{entry.name}</text>
                </Link>
            </div>
            );
            })}
        </div>
        {/* <VideoPlayer videoSrc={this.props.src}/> */}
      </div>
    );
  }
}
