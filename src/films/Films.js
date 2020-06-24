import React, { Component,  useState  } from 'react';
import NavigationHeader from '../components/NavigationHeader';
import './Films.css'
import Iframe from 'react-iframe'
import VideoPlayer from '../components/VideoPlayer'
import request from "../node/vimeoApi"
import { Link } from 'react-router-dom';  
import ReactPlayer from "react-player";
import myVideo from '../audio/test.MP4'


let Vimeo = require('vimeo').Vimeo;

export default class Films extends Component {  
  constructor(props) {
    super(props)
    this.state = {
      entries: this.props.entries
    }
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
        <NavigationHeader formatString="lightFormat" page="films"/>
        <ReactPlayer url={myVideo} width="100%" height="100%" playing/>
        {/* <video 
        className="testVideo"
        // style={{height: "100vw", width: "100vw", position:"absolute", top: 0, bottom: 0, right: 0, left: 0}}
        autoplay="true"
        loop 
        muted 
        webkit-playsinline 
        playsinline 
        //src="http://danielcaesar.com/admin/wp-content/uploads/2016/11/Clip-driver.mp4"
        src="../../public/test.MP4"
        >


        </video> */}
        

        <div style={{display: "flex", bottom: 60, left: 80, position: "absolute", flexDirection:"row"}}>
          <div className="filmSeletion" style={{zIndex: 20, marginRight: 30 }}>
            <Link to={`${this.props.linkPrefix}/${this.state.entries[0].id}`} >
            <text>Fall '17</text>
            </Link>
          </div>

          <div className="filmSeletion" style={{zIndex: 20, marginRight: 30 }}>
            <Link to={`${this.props.linkPrefix}/${this.state.entries[1].id}`}>
              <text>Spring '18</text>
            </Link>
          </div>
          <div className="filmSeletion" style={{zIndex: 20, marginRight: 30 }}>
            <Link to={`${this.props.linkPrefix}/${this.state.entries[2].id}`}>
              <text>LA Street Shit</text>
            </Link>
          </div>
          <div className="filmSeletion" style={{zIndex: 20, marginRight: 30 }}>
            <Link to={`${this.props.linkPrefix}/${this.state.entries[3].id}`}>
              <text>Central Coast Crafted</text>
            </Link>
          </div>
          <div className="filmSeletion" style={{zIndex: 20, marginRight: 30 }}>
            <Link to={`${this.props.linkPrefix}/${this.state.entries[4].id}`}>
              <text>pacificMusic EP1</text>
            </Link>
          </div>
        </div>
        {/* <VideoPlayer videoSrc={this.props.src}/> */}
      </div>
    );
  }
}
