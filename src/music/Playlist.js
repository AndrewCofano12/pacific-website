import React, { Component } from 'react';
import $ from 'jquery';
//import './Playlist.css';
import PlaylistGridItem from './PlaylistGridItem';
import { Route } from 'react-router-dom';
import PlaylistCoverView from './PlaylistCoverView';

export default class Playlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
        playlistData: props.playlistData,
        gridView: null,
        viewIndex: this.props.atIndex
    };
    this.handleGridItemSelect = this.handleGridItemSelect.bind(this);
  }

    componentDidMount() {
        console.log("PLAYLIST MOUNTED: " + this.props);
        if (this.props.location.state && this.props.location.state.fromLink) {
            if (!this.props.location.state.showCover) {
                this.setState({gridView: true})
            }
            else {
                this.setState({gridView: false, viewIndex: this.props.location.state.showCoverIndex})
                this.props.updateView(true, this.props.location.state.showCoverIndex)
            }

        }

  }


  componentWillReceiveProps(newProps) {
      console.log("PLAYLIST :: will receive ");
      if (newProps.location.state && newProps.location.state.fromLink) {
        if (!newProps.location.state.showCover) {
            this.setState({gridView: true})
        }
        else {
            this.setState({gridView: false, viewIndex: newProps.location.state.showCoverIndex})
        }
      } 

  }

handleGridItemSelect(index) {
    this.setState({gridView: false, viewIndex: index})
    this.props.updateView(true, index)
}

render() {
    return (
        <div>
            {/* {this.state.gridView ? 
            ( */}
                <div className="music-playlistGridView">
                    {this.state.playlistData.items.map((item,i) => {
                    return (
                        <PlaylistGridItem 
                            key={i} 
                            npTitle={this.props.npTitle}
                            playlistKey={this.state.playlistData.url} 
                            matchURL={this.props.matchURL}
                            itemIndex={i} 
                            itemData={item} 
                            selectItem={this.handleGridItemSelect} 
                            onPlay={this.props.onPlay} 
                            onPause={this.props.onPause}
                            npFile={this.props.npFile}
                            updateNowPlaying={this.props.updateNowPlaying}
                            audioRef={this.props.audioRef} 
                            updateBackground={this.props.updateBackground}/>
                    )
                    })}
                </div>
            {/* ):( */}
                {/* <div className="music-playlistCoverView">
                    <Route path={`${this.props.matchURL}/${this.state.playlistData.url}/`} render={(props) => 
                        <PlaylistCoverView 
                            {...props} 
                            playlistKey={this.props.playlistKey}
                            playlistLink={this.state.playlistData.url} 
                            selectedIndex={this.state.viewIndex} 
                            playlistData={this.state.playlistData.items} 
                            audioRef={this.props.audioRef} 
                            onPlay={this.props.onPlay} 
                            onPause={this.props.onPause}
                            npFile={this.props.npFile}
                            updateView={this.props.updateView}
                            updateNowPlaying={this.props.updateNowPlaying}
                            updateBackground={this.props.updateBackground}/>}/>
                </div> */}
            {/* )} */}
        </div>
    );
    }
}