import React, { Component } from 'react';
import Episode from './Episode'
import { RiPlayCircleLine } from "react-icons/ri";
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

export default class PlaylistCoverView extends Component {
  value;

  constructor(props) {
    super(props);
    this.state = {
        playlistItems: this.props.playlistData.items,
        value: null,
        animation: false
    };
    // this.onChange = this.onChange.bind(this);
    this.goForward = this.goForward.bind(this);
    this.goBack = this.goBack.bind(this);
    this.onChange = this.onChange.bind(this);

  }

  componentDidMount() {

    // console.log("MOUNTING...")
    if (this.props.location.state && this.props.location.state.fromLink) {
      this.setState({value : this.props.location.state.showCoverIndex})
      this.value = this.props.location.state.showCoverIndex;
    } 
    else {

    }

     
}

  componentWillReceiveProps(newProps) {
    // console.log("RECEIVING..." + newProps.location.state.fromLink + newProps.location.state.showCoverIndex);
    if (newProps.location.state && newProps.location.state.fromLink) {
      
    //if (newProps.location.state && newProps.location.state.fromNp) {
      // this.setState({value : newProps.location.state.showCoverIndex})
      // history.replace({ state: {} })

      if (newProps.location.state.showCoverIndex != this.state.value) {
       // Do nothing 
      } else {
        this.setState({value : newProps.location.state.showCoverIndex});
  

      }
    } 
    else {

    }   
  }

  onChange(value) {
    // console.log("VALUE " + value)
    if (!this.state.animation) {
    this.setState({animation: true})
    }        
      // console.log("about to change")

  }


  goForward() {
    const val = this.state.value;
    if (this.state.value < (this.state.playlistItems.length - 1)) {
      this.setState({value : this.state.value + 1})
    }
  }

  goBack() {
    const val = this.state.value;
    if (this.state.value > 0) {
      this.setState({value : this.state.value - 1,})
    }
  }

  componentDidUpdate() {

  }


  render() {
    return (
      <div className="music-playlistCoverView">

        <Carousel
          clickToChange
            value={this.state.value}
            animationSpeed={this.state.animation ? '500' : '0'}
            // onChange={e => this.onChange(parseInt(e.target.value || 0))}
            onChange={this.onChange}
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
                      onPause={this.props.onPause}
                      // resolve={() => import('../audio/' + episode.file)} 
                      goForward={this.goForward} 
                      goBack={this.goBack}
                      npFile={this.props.npFile}
                      npTitle={this.props.npTitle}
                      updateNowPlaying={this.props.updateNowPlaying}
                      updateBackground={this.props.updateBackground}/>
                    </div>
                )
            })}>
        </Carousel>
</div>
    );}
}