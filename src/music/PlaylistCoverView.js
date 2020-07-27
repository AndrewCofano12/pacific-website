import React, { Component } from 'react';
import Episode from './Episode'
import { RiPlayCircleLine } from "react-icons/ri";
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

export default class PlaylistCoverView extends Component {
  constructor(props) {
    super(props);
    this.state = {
        playlistItems: this.props.playlistData.items,
        value: null
    };
    // this.onChange = this.onChange.bind(this);
    this.goForward = this.goForward.bind(this);
    this.goBack = this.goBack.bind(this);

  }

  componentDidMount() {
    console.log("MOUNTING...")
    if (this.props.location.state && this.props.location.state.fromLink) {
      this.setState({value : this.props.location.state.showCoverIndex})
    } 
    else {

    }

     
}

  componentWillReceiveProps(newProps) {
    console.log("RECEIVING..." + newProps.location.state.fromLink + newProps.location.state.showCoverIndex);
  
    if (newProps.location.state && newProps.location.state.fromLink) {
    //if (newProps.location.state && newProps.location.state.fromNp) {
      // this.setState({value : newProps.location.state.showCoverIndex})
      // history.replace({ state: {} })

      if (newProps.location.state.showCoverIndex != this.state.value) {
       // Do nothing 
      } else {
        this.setState({value : newProps.location.state.showCoverIndex})

      }
    } 
    else {

    }   
  }


  goForward() {
    const val = this.state.value;
    if (this.state.value < (this.state.playlistItems.length - 1)) {
      this.props.updateView(true, val + 1)
      this.setState({value : this.state.value + 1})
    }
  }

  goBack() {
    const val = this.state.value;
    if (this.state.value > 0) {
      this.props.updateView(true, val + 1)
      this.setState({value : this.state.value - 1,})
    }
  }



  render() {
    return (
      <div className="music-playlistCoverView">

        <Carousel
            value={this.state.value}
            // onChange={this.onChange}
            draggable={false}
            slides={this.state.playlistItems.map((episode,i) => {
                return (
                    <div key={i}>
                    <Episode  
                      key={i} 
                      playlistKey={this.props.playlistKey} 
                      playlistLink={this.props.playlistLink}
                      playlistLength={this.state.playlistItems.length}
                      itemIndex={i} 
                      epData={episode} 
                      audioRef={this.props.audioRef} 
                      onPlay={this.props.onPlay} 
                      resolve={() => import('../audio/' + episode.file)} 
                      goForward={this.goForward} 
                      goBack={this.goBack}
                      npFile={this.props.npFile}
                      updateNowPlaying={this.props.updateNowPlaying}
                      updateBackground={this.props.updateBackground}/>
                    </div>
                )
            })}>
        </Carousel>
</div>
    );}
}