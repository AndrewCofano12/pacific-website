import React, { Component } from 'react';

export default class PlaylistCoverView extends Component {
  constructor(props) {
    super(props);
    this.state = {
        nowPlayingTitle: null,
    };


  }




  render() {
    return (
        <Link className="music-nowPlayingLink" to={{pathname: `${this.props.match.path}/episodes`, 
        state: {
          fromLink: true,
          showCover: true,
          showCoverIndex: 1
        }}}>
            <div className="music-nowPlayingTitle">
                pacific music ep. 2
                {}
            </div>
        </Link>
        );}
    }