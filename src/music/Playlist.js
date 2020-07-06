import React, { Component } from 'react';
import $ from 'jquery';
import './Playlist.css';

export default class Playlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
        playlistData: props.playlistData,
        gridView: true
    };
  }

    componentDidMount() {
    // const resolve = this.props.resolve;
    // const { default: episodeAudio } = await resolve();
    // this.setState({ episodeAudio });

  }


render() {
    return (
        <div>
            {this.state.gridView ? 
            (
                <div className="music-playlistGridView">
                    {this.state.playlistData.items.map((item,i) => {
                    return (
                        <PlaylistGridItem key={i} itemData={item}/>
                    )
                    })}
                </div>
            ):(
                <div className="music-playlistCoverView">
                    <PlaylistCoverView selectedIndex={this.state.selectedIndex} playlistData={this.state.playlistData}/>
                </div>
            )}
        </div>
    );
    }
}