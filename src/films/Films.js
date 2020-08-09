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
        <NavigationHeader formatString="lightFormat" page="visual"/>
        <video 
        className="testVideo"
        autoPlay={true}
        loop={true} 
        muted={true}
        src="http://danielcaesar.com/admin/wp-content/uploads/2016/11/Clip-driver.mp4"
        >

        </video> 
        
        <div className="films-linkContainer" >
          <div className="filmSeletion">
            <Link to={`${this.props.linkPrefix}/${this.state.entries[0].id}`} >
            <text>motion + sound</text>
            </Link>
          </div>

          <div className="filmSeletion">
            <Link to={`${this.props.linkPrefix}/${this.state.entries[1].id}`}>
              <text>thanks for the memories</text>
            </Link>
          </div>
          <div className="filmSeletion">
            <Link to={`${this.props.linkPrefix}/${this.state.entries[2].id}`}>
              <text>pacificMUSIC ep. 1</text>
            </Link>
          </div>
        </div>
        {/* <VideoPlayer videoSrc={this.props.src}/> */}
      </div>
    );
  }
}
