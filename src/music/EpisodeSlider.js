import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import './EpisodeSlider.css'
import Pagination from '../components/pagination/Pagination';
import { handleColorOnSliderChange } from '../jslibrary.js'
import _ from 'lodash'
import AwesomeDebouncePromise from 'awesome-debounce-promise'
import { useAsync } from 'react-async-hook'
import { useConstant } from 'use-constant'
import AudioPlayer, { RHAP_UI, CURRENT_TIME } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


export default class EpisodeSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            centerWidth: window.innerWidth,
            color: '',
            lastScrollTop: 0,
            scrolling: false,
            timer: 0
        };
        this.scrollDebounce = true
    }
    
    handleChangeIndex = index => {
        this.setState({index});
        handleColorOnSliderChange(index)
    };
    
    nextPage() {
        console.log("nextPage")
        var index = this.state.index;
        if(this.state.index < 5){
            this.setState({
                index: this.state.index + 1,
            });
        }
        handleColorOnSliderChange(index + 1)
    }

    previousPage() {
        console.log("previousPage")
        var index = this.state.index;
        if(this.state.index > 0){
            this.setState({
                index: this.state.index - 1,
            });
        }
        handleColorOnSliderChange(index - 1)
    }

    detectUpOrDownScroll(e) {
        if (this.scrollDebounce) {            
            this.scrollDebounce = false
            setTimeout(() => {this.scrollDebounce = true}, 1000)
            if (e.deltaY > 0) {
                this.nextPage()
                this.scrollAccumulator = 0
            } else if (e.deltaY < 0) {
                this.previousPage();
                this.scrollAccumulator = 0
            }
        }
    }

    render() {
        const { index } = this.state

        return (
            <div style={{display: 'flex', justifyContent: 'center'}} 
             className="EpisodeSlider"
             onWheel = {(e) => {this.detectUpOrDownScroll(e)}}>

                <SwipeableViews className="swipeableView" enableMouseEvents={true}
                draggable={false}
                index={index} 
                ignoreNativeScroll={true}  
                onChangeIndex={this.handleChangeIndex}
                onSwitching={(index, type) =>  {handleColorOnSliderChange(index)}}>
                    <div style={Object.assign({})}>
                        <div className="artworkWrapper" style={{backgroundColor: this.state.color}}>
                            <img draggable="false" className="coverImage noselect" src={require("../images/ep3-front.jpg")} alt="fuck"/>
                            <img draggable="false" className="tracklistImage noselect" src={require("../images/ep3-back.jpg")} alt="fuck"/>
                        </div>

                        <div className="audioPlayerContainer">
                            <AudioPlayer 
                            src={'../images/EP-3_VIDEO_MIX.wav'}
                            layout="horizontal-reverse"
                            showJumpControls={false}
                            customVolumeControls={[]}
                            customAdditionalControls={[]}
                            />
                        </div>
                    </div>
                    <div style={Object.assign({})}>
                        <div className="artworkWrapper" style={{backgroundColor: this.state.color}}>
                            <img draggable="false" className="coverImage noselect" src={require("../images/ep2-front.jpg")} alt="fuck"/>
                            <img draggable="false" className="tracklistImage noselect" src={require("../images/ep2-back.jpg")} alt="fuck"/>
                        </div>

                        <div className="audioPlayerContainer">
                            <AudioPlayer 
                            src={'../images/EP-3_VIDEO_MIX.wav'}
                            layout="horizontal-reverse"
                            showJumpControls={false}
                            customVolumeControls={[]}
                            customAdditionalControls={[]}
                            />
                        </div>
                    </div>
                    <div style={Object.assign({})} style={{backgroundColor: this.state.color}}>
                        <div className="artworkWrapper">
                            <img draggable="false" className="coverImage noselect" src={require("../images/ep1-cover.png")} alt="fuck"/>
                            <img draggable="false" className="tracklistImage noselect" src={require("../images/ep1-back.jpeg")} alt="fuck"/>
                        </div>

                        <div className="audioPlayerContainer">
                            <AudioPlayer 
                            src={'../images/EP-3_VIDEO_MIX.wav'}
                            layout="horizontal-reverse"
                            showJumpControls={false}
                            customVolumeControls={[]}
                            customAdditionalControls={[]}
                            />
                        </div>

                    </div>

                    <div style={Object.assign({})} style={{backgroundColor: this.state.color}}>
                        <div className="artworkWrapper">
                            <img draggable="false" className="coverImage noselect" src={require("../images/ep1-cover.png")} alt="fuck"/>
                            <img draggable="false" className="tracklistImage noselect" src={require("../images/ep1-back.jpeg")} alt="fuck"/>
                        </div>

                        <div className="audioPlayerContainer">
                            <AudioPlayer 
                            src={'../images/EP-3_VIDEO_MIX.wav'}
                            layout="horizontal-reverse"
                            showJumpControls={false}
                            customVolumeControls={[]}
                            customAdditionalControls={[]}
                            />
                        </div>

                    </div>
                    <div style={Object.assign({})} style={{backgroundColor: this.state.color}}>
                        <div className="artworkWrapper">
                            <img draggable="false" className="coverImage noselect" src={require("../images/ep1-cover.png")} alt="fuck"/>
                            <img draggable="false" className="tracklistImage noselect" src={require("../images/ep1-back.jpeg")} alt="fuck"/>
                        </div>

                        <div className="audioPlayerContainer">
                            <AudioPlayer 
                            src={'../images/EP-3_VIDEO_MIX.wav'}
                            layout="horizontal-reverse"
                            showJumpControls={false}
                            customVolumeControls={[]}
                            customAdditionalControls={[]}
                            />
                        </div>

                    </div>
                    <div style={Object.assign({})} style={{backgroundColor: this.state.color}}>
                        <div className="artworkWrapper">
                            <img draggable="false" className="coverImage noselect" src={require("../images/ep1-cover.png")} alt="fuck"/>
                            <img draggable="false" className="tracklistImage noselect" src={require("../images/ep1-back.jpeg")} alt="fuck"/>
                        </div>

                        <div className="audioPlayerContainer">
                            <AudioPlayer 
                            src={'../images/EP-3_VIDEO_MIX.wav'}
                            layout="horizontal-reverse"
                            showJumpControls={false}
                            customVolumeControls={[]}
                            customAdditionalControls={[]}
                            />
                        </div>

                    </div>

                </SwipeableViews>
                <Pagination dots={6} index={index} onChangeIndex={this.handleChangeIndex} />                
            </div>
    );
}}

