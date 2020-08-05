import React, { Component,  useState  } from 'react';
import NavigationHeader from '../../components/NavigationHeader';
import './FilmsMobile.css';
import Vimeo from "@vimeo/player";

export default class Films extends Component {  
    videoPlayer;
    volume = 30;


  constructor(props) {
    super(props)
    this.state = {
      filmsObject: this.props.dbdata,
      playURL: ''
    }
  }

  componentDidMount() {
    var options = {
      playsinline: false,
      autoPlay: true
    }
    this.videoPlayer = new Vimeo("filmsPlayer", options);
    this.videoPlayer.setVolume(this.volume);


  }


  handlePlay = (i) => {
    // console.log(i)
    // console.log('film'+ i);
    
    // var player = document.getElementById(`film${i}`);
    // console.log(player)
    this.setState({playURL: this.state.filmsObject.filmsEntries[i].src})
    console.log("play")
    const videoP = this.videoPlayer;
    this.videoPlayer.on("loaded", function() {
      console.log("loaded") 
      videoP.play()});

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
        <video 
        className="testVideo"
        autoPlay={true}
        loop={true} 
        muted={true}
        src="http://danielcaesar.com/admin/wp-content/uploads/2016/11/Clip-driver.mp4"
        >

        </video>              
         <div id="filmsPlayer" data-vimeo-url={this.state.playURL}></div>

        <div className="films-linkContainer">

        {this.state.filmsObject.filmsEntries.map((entry, i) => {
            console.log(`film${i}`);
            return (
                <div className="filmSeletion" >
                    <div onClick={() => this.handlePlay(i)}>{entry.name}</div>
                </div>
            );
            })}
        </div>
    </div>

    );
  }
}