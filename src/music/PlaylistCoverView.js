import React, { Component } from 'react';
import Episode from './Episode'
import { RiPlayCircleLine } from "react-icons/ri";
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

export default class PlaylistCoverView extends Component {
  constructor(props) {
    super(props);
    this.state = {
        playlistItems: props.playlistData,
        value: this.props.selectedIndex
    };
    // this.onChange = this.onChange.bind(this);
    this.goForward = this.goForward.bind(this);
    this.goBack = this.goBack.bind(this);

  }

  componentDidMount() {
    console.log("PLAYLIST COVER VIEW... AUDIO IS: " + this.props.audioRef.current);
    //this.setState({value: this.props.selectedIndex})
     
}

  componentWillReceiveProps(newProps) {
    console.log(newProps.selectedIndex)
    if (this.state.value !== newProps.selectedIndex) {
      this.setState({value: newProps.selectedIndex})
    }
    // this.setState({value: this.props.selectedIndex})
  }


  // onChange(value) {
  //   this.setState({ value: value });
  // }

  goForward() {
    // TO-DO: Handle out-of-bounds
    console.log(this.state.value);  
    if (this.state.value < (this.state.playlistItems.length - 1)) {
      this.setState({value : this.state.value + 1,})
    }
  }

  goBack() {
      // TO-DO: Handle out-of-bounds
    if (this.state.value > 0) {
      this.setState({value : this.state.value - 1,})
    }
  }



  render() {
    return (
        <Carousel
            value={this.state.value}
            // onChange={this.onChange}
            draggable={false}
            slides={this.state.playlistItems.map((episode,i) => {
              console.log("index is..." + i)
                return (
                    <div key={i}>
                    <Episode  
                      key={i} 
                      playlistKey={this.props.playlistKey} 
                      itemIndex={i} 
                      epData={episode} 
                      audioRef={this.props.audioRef} 
                      onPlay={this.props.onPlay} 
                      resolve={() => import('../audio/' + episode.file)} 
                      goForward={this.goForward} goBack={this.goBack}
                      npFile={this.props.npFile}/>
                    </div>
                )
            })}>
        
        </Carousel>
    );}
}