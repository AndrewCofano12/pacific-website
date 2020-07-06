import React, { Component } from 'react';
import Episode from './Episode'
import { RiPlayCircleLine } from "react-icons/ri";
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

export default class PlaylistCoverView extends Component {
  constructor(props) {
    super(props);
    this.state = {
        playlistData: props.playlistData,
        value: 0
    };
    this.onChange = this.onChange.bind(this);
    this.goForward = this.goForward.bind(this);
    this.goBack = this.goBack.bind(this);

  }

  onChange(value) {
    this.setState({ value });
  }

  goForward() {
    // TO-DO: Handle out-of-bounds
    this.setState({value : this.state.value + 1,})
  }

  goBack() {
      // TO-DO: Handle out-of-bounds
    this.setState({value : this.state.value - 1,})
  }



  render() {
    return (
        <Carousel
            value={this.state.value}
            onChange={this.onChange}
            draggable={false}
            slides={this.state.playlistData.map((episode,i) => {
                return (
                    <div key={i}>
                    <Episode childKey={i} epData={episode} resolve={() => import('../audio/' + episode.file)} goForward={this.goForward} goBack={this.goBack}/>
                    </div>
                )
            })}>
        
        </Carousel>
    );}
}