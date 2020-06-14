import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import './EpisodeSlider.css'
import Pagination from '../components/pagination/Pagination';
import AudioPlayer, { RHAP_UI, CURRENT_TIME } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import LazyLoad from 'react-lazyload';

export default class EpisodeSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            centerWidth: window.innerWidth,
            color: '',
            lastScrollTop: 0,
            scrolling: false,
            timer: 0,
            episodes: props.episodes
        };
        this.scrollDebounce = true
    }
    
    handleColorOnSliderChange(currentIndex) {
        var episodes = this.state.episodes;
        const BackgroundElement = document.querySelector('.music-musicBackground')
        BackgroundElement.style.cssText = "background-color: " + episodes[currentIndex].backgroundColor;

      }


    handleChangeIndex = index => {
        this.setState({index});
        this.handleColorOnSliderChange(index)
    };
    
    nextPage() {
        console.log("nextPage")
        var index = this.state.index;
        if(this.state.index < (this.state.episodes.length - 1)){
            this.setState({
                index: this.state.index + 1,
            });
            this.handleColorOnSliderChange(index + 1)
        }
    }

    previousPage() {
        console.log("previousPage")
        var index = this.state.index;
        if(this.state.index > 0){
            this.setState({
                index: this.state.index - 1,
            });
            this.handleColorOnSliderChange(index - 1)
        }
    }

    detectUpOrDownScroll(e) {
        var index = this.state.index;
            if (this.scrollDebounce) {            
                this.scrollDebounce = false
                setTimeout(() => {this.scrollDebounce = true}, 2000)
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
             className="music-EpisodeSlider"
             onWheel = {(e) => {this.detectUpOrDownScroll(e)}}>
                
                <SwipeableViews className="music-swipeableView" enableMouseEvents={true}
                draggable={false}
                index={index} 
                ignoreNativeScroll={true}  
                onChangeIndex={this.handleChangeIndex}
                onSwitching={(index, type) =>  {this.handleColorOnSliderChange(index)}}>
                    {this.state.episodes.map((episode,i) => {
                        return (
                            <LazyLoad offset={500} key={i}>
                            <div className="music-singleEpisodeContainer"style={Object.assign({})}>
                                <div className="music-artworkWrapper" style={{backgroundColor: this.state.color}}>
                                    <img draggable="false" className="music-artwork music-coverImage music-noselect" src={require('../images/' + episode.frontArtwork)} alt="fuck"/>
                                    <img draggable="false" className="music-artwork music-tracklistImage music-noselect" src={require('../images/' + episode.backArtwork)} alt="fuck"/>
                                </div>
                                <div className="music-audioPlayerContainer">
                                    <AudioPlayer 
                                    autoPlay={true}
                                    // src={'../audio/' + episode.file}
                                    src='../audio/sample.mp3'
                                    layout="horizontal-reverse"
                                    showJumpControls={false}
                                    customVolumeControls={[]}
                                    customAdditionalControls={[]}
                                    />
                                </div>
                            </div>
                            </LazyLoad>
                        )
                    })}
 
                </SwipeableViews>
                <Pagination dots={this.state.episodes.length} index={index} onChangeIndex={this.handleChangeIndex} />                
            </div>
    );
}}

