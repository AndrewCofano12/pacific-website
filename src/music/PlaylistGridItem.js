import React, { Component } from 'react';
import './PlaylistGridItem.css';
import { RiPlayCircleLine } from "react-icons/ri";


export default class PlaylistGridItem extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.state = {
        itemData: props.itemData,
        isHovering: false
    };
  }

  componentDidUMount() {
    this.setState({selectItemCallback: this.props.selectItem})
  }

  handlePlay() {
    this.props.onPlay(this.props.playlistKey, this.props.itemIndex);
  }

  handlePause() {

  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  handleItemClick() {
    console.log("key" + this.props.itemIndex);
    this.props.selectItem(this.props.itemIndex)
    /* add callback function up to Playlist where it will change gridView state with specific index of selected item */
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }


  render() {
    return (
    <div  
        onMouseEnter={this.handleMouseHover}
        onMouseLeave={this.handleMouseHover} 
        onClick={this.handleItemClick}
        className="music-playlistGridItem">

        {/* Grid Item Cover */}
        <div className="music-gridItemCover">
        
            <img draggable="false" className="music-gridItemImage music-noselect" src={require('../images/music/' + this.state.itemData.frontArtwork)} alt="fuck"/>

            {/* Grid Item Playback Control */}
            {/**
             * Handle Play and Pause of grid item. Upon mounting, use prop to determine whether to show play or pause icon
             * If playing, show icon always.
             * If not playing, use this.state.isHovering 
             */}
            {this.state.isHovering ? 
            ( 
                
                <RiPlayCircleLine className="music-playControlAction" id="music-playControl" onClick={this.handlePlay}/>
            ) 
            : null }  
        </div>

    </div>      
    );}
}