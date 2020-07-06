import React, { Component } from 'react';
import './PlaylistGridItem.css';
import { RiPlayCircleLine } from "react-icons/ri";


export default class PlaylistGridItem extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
        itemData: props.itemData,
        isHovering: false
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
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
        className="music-playlistGridItem">

        {/* Grid Item Cover */}
        <div className="music-gridItemCover">
        
            <img draggable="false" className="music-gridItemImage music-noselect" src={require('../images/music/' + this.state.itemData.frontArtwork)} alt="fuck"/>

            {/* Grid Item Playback Control */}
            {this.state.isHovering ? 
            ( 
                <RiPlayCircleLine className="music-playControlAction" id="music-playControl"/>
            ) 
            : null }  
        </div>

    </div>      
    );}
}