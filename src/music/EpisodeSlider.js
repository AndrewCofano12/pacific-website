import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import './EpisodeSlider.css'
import Pagination from '../components/pagination/Pagination';

export default class EpisodeSlider extends Component {
    state = {
        index: 0,
        centerWidth: window.innerWidth,
        color: ''
      };

    handleChangeIndex = index => {
        this.setState({
          index,
        });
      };

    render() {
        const { index } = this.state;
        
        return (
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <SwipeableViews className="swipeableView" enableMouseEvents={true} axis="x" 
                index={index} 
                onChangeIndex={this.handleChangeIndex}
                onSwitching={(index, type) =>  {if (index == 2) {this.setState({color: '#FFFFFF'})}}}>
                    <div style={Object.assign({})}>
                        <div className="artworkWrapper">
                            <img className="coverImage noselect" src={require("../images/ep2-front.jpg")} alt="fuck"/>
                            <img className="tracklistImage noselect" src={require("../images/ep2-back.jpg")} alt="fuck"/>
                        </div>
                    </div>
                    <div style={Object.assign({})}>
                        <div className="artworkWrapper">
                            <img className="coverImage noselect" src={require("../images/ep1-cover.png")} alt="fuck"/>
                            <img className="tracklistImage noselect" src={require("../images/ep1-back.jpeg")} alt="fuck"/>
                        </div>
                    </div>
                    <div style={Object.assign({})}>
                        <div className="artworkWrapper">
                            <img className="coverImage noselect" src={require("../images/ep1-cover.png")} alt="fuck"/>
                            <img className="tracklistImage noselect" src={require("../images/ep1-back.jpeg")} alt="fuck"/>
                        </div>
                    </div>
                    <div style={Object.assign({})}>
                        <div className="artworkWrapper">
                            <img className="coverImage noselect" src={require("../images/ep1-cover.png")} alt="fuck"/>
                            <img className="tracklistImage noselect" src={require("../images/ep1-back.jpeg")} alt="fuck"/>
                        </div>
                    </div>
                    <div style={Object.assign({})}>
                        <div className="artworkWrapper">
                            <img className="coverImage noselect" src={require("../images/ep1-cover.png")} alt="fuck"/>
                            <img className="tracklistImage noselect" src={require("../images/ep1-back.jpeg")} alt="fuck"/>
                        </div>
                    </div>
                    <div style={Object.assign({})}>
                        <div className="artworkWrapper">
                            <img className="coverImage noselect" src={require("../images/ep1-cover.png")} alt="fuck"/>
                            <img className="tracklistImage noselect" src={require("../images/ep1-back.jpeg")} alt="fuck"/>
                        </div>
                    </div>
                    <div style={Object.assign({})}>
                        <div className="artworkWrapper">
                            <img className="coverImage noselect" src={require("../images/ep1-cover.png")} alt="fuck"/>
                            <img className="tracklistImage noselect" src={require("../images/ep1-back.jpeg")} alt="fuck"/>
                        </div>
                    </div>
                    <div style={Object.assign({})}>
                        <div className="artworkWrapper">
                            <img className="coverImage noselect" src={require("../images/ep1-cover.png")} alt="fuck"/>
                            <img className="tracklistImage noselect" src={require("../images/ep1-back.jpeg")} alt="fuck"/>
                        </div>
                    </div>
                    <div style={Object.assign({})}>
                        <div className="artworkWrapper">
                            <img className="coverImage noselect" src={require("../images/ep1-cover.png")} alt="fuck"/>
                            <img className="tracklistImage noselect" src={require("../images/ep1-back.jpeg")} alt="fuck"/>
                        </div>
                    </div>
                    <div style={Object.assign({})}>
                        <div className="artworkWrapper">
                            <img className="coverImage noselect" src={require("../images/ep1-cover.png")} alt="fuck"/>
                            <img className="tracklistImage noselect" src={require("../images/ep1-back.jpeg")} alt="fuck"/>
                        </div>
                    </div>
                </SwipeableViews>
                <Pagination dots={10} index={index} onChangeIndex={this.handleChangeIndex} />                
            </div>
    );
}}

