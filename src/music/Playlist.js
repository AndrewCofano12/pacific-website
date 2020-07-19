import React, { Component } from 'react';
import $ from 'jquery';
//import './Playlist.css';
import PlaylistGridItem from './PlaylistGridItem';
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
    console.log(this.props.updateBackground);
    // const resolve = this.props.resolve;
    // const { default: episodeAudio } = await resolve();
    // this.setState({ episodeAudio });
    if (this.props.location.state && this.props.location.state.fromLink) {
        if (!this.props.location.state.showCover) {
            this.setState({gridView: true})
        }
        else {
            this.setState({gridView: false, viewIndex: this.props.location.state.showCoverIndex})
            this.props.updateView(true, this.props.location.state.showCoverIndex)
        }

    }
    else {
        console.log("PLAYLIST DID MOUNT " + this.props.showCover)
        if (this.props.showCover) {
            this.setState({gridView: false, viewIndex: this.props.atIndex})
        }
        else {
            this.setState({gridView: true})
        }    
    }
  }


  componentWillReceiveProps(newProps) {
      console.log(newProps);
      console.log("COMING FROM " + newProps.location.state.fromLink)
    //   console.log("entered willReceiveProps... " + this.props.location.state.showCover + " & " + this.props.location.state.showCoverIndex)
      if (newProps.location.state && newProps.location.state.fromLink) {
      console.log("entered willReceiveProps... " + newProps.location.state.showCover + " & " + newProps.location.state.showCoverIndex)
        if (!newProps.location.state.showCover) {
            console.log("changing to grid view")
            this.setState({gridView: true})
        }
        else {
            this.setState({gridView: false, viewIndex: newProps.location.state.showCoverIndex})
            this.props.updateView(true, newProps.location.state.showCoverIndex)
        }
      } 
      else {
        console.log("PLAYLIST WILL RECEIVE " + this.props.showCover)
        if (this.props.showCover) {
            this.setState({gridView: false, viewIndex: this.props.atIndex})
        }
        else {
            this.setState({gridView: true})
        }
      }

  }

handleGridItemSelect(index) {
    console.log(index);
    this.setState({gridView: false, viewIndex: index})
    this.props.updateView(true, index)
    // console.log(this.state.viewIndex)
}

render() {
    return (
        <div>
            {this.state.gridView ? 
            (
                <div className="music-playlistGridView">
                    {this.state.playlistData.items.map((item,i) => {
                    return (
                        <PlaylistGridItem 
                            key={i} 
                            playlistKey={this.props.playlistKey} 
                            itemIndex={i} itemData={item} 
                            selectItem={this.handleGridItemSelect} 
                            onPlay={this.props.onPlay} 
                            onPause={this.props.onPause}
                            npFile={this.props.npFile}
                            updateBackground={this.props.updateBackground}/>
                    )
                    })}
                </div>
            ):(
                <div className="music-playlistCoverView">
                    <PlaylistCoverView 
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
                        updateBackground={this.props.updateBackground}/>
                </div>
            )}
        </div>
    );
    }
}