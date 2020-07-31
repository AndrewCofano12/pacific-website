import React, { Component,  useState  } from 'react';
import NavigationHeader from '../../components/NavigationHeader';
import './FilmsMobile.css';
import Vimeo from "@vimeo/player";
import { Link } from 'react-router-dom';  


export default class Films extends Component {  
    videoPlayers = [];
    video2Player;
    video3Player;
    volume = 30;


  constructor(props) {
    super(props)
    this.state = {
      filmsObject: this.props.entries
    }
  }

  componentDidMount() {
    // this.state.filmsObject.map((entry, i) => {
    //     var idString = 'film'
    //     var options = {
    //         playsinline: false,
    //     }
    //     var videoPlayer = new Vimeo(`film${i}`, options);
    //     videoPlayer.setVolume(this.volume);
    //     this.videoPlayers.push(videoPlayer);
    // });


  }


  handlePlay = (i) => {
    console.log(i)
    console.log('film'+ i);
    var player = document.getElementById(`film${i}`);
    console.log(player)
    player.style["display"] = 'block';
    this.videoPlayers[i].play();
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
        <div className="films-linkContainer">

        {this.state.filmsObject.map((entry, i) => {
            console.log(`film${i}`);
            return (
                <div className="filmSeletion" >
                    <Link to={`${this.props.linkPrefix}/${this.state.filmsObject[0].id}`} >
                      <div>{entry.name}</div>
                    </Link>

                    {/* <div onClick={() => this.handlePlay(i)}>{entry.name}</div> */}
                    {/* <div style={{display: 'none'}} id={`film${i}`} data-vimeo-url={entry.src}></div> */}
                </div>
            );
            })};
        </div>
    </div>

    );
  }
}
