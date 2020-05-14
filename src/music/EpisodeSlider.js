import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import './EpisodeSlider.css'
import Pagination from '../components/pagination/Pagination';
import { handleColorOnSliderChange } from '../jslibrary.js'

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
    };

    nextPage() {
        console.log("nextPage")
        if(this.state.index < 2){
            this.setState({
                index: this.state.index + 1,
            });
        }
    }

    previousPage() {
        console.log("previousPage")
        if(this.state.index > 0){
            this.setState({
                index: this.state.index - 1,
            });
        }
    }

    detectUpOrDownScroll() {
        console.log("detectUpOrDownScroll")
        if(this.scrollDebounce) {
            this.scrollDebounce = false
            setTimeout(() => {this.scrollDebounce = true}, 500)
            console.log("detectUpOrDownScroll")
            var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
            if (st > this.state.lastScrollTop){
                this.nextPage()   
            } else {
                this.previousPage()   
            }
        }
        
    }

    componentDidMount() {  
        window.addEventListener("scroll", () => this.detectUpOrDownScroll(), false)
    }

    render() {
        const { index } = this.state

        return (
            <div style={{display: 'flex', justifyContent: 'center'}} className="EpisodeSlider">
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
                    </div>
                    <div style={Object.assign({})}>
                        <div className="artworkWrapper" style={{backgroundColor: this.state.color}}>
                            <img draggable="false" className="coverImage noselect" src={require("../images/ep2-front.jpg")} alt="fuck"/>
                            <img draggable="false" className="tracklistImage noselect" src={require("../images/ep2-back.jpg")} alt="fuck"/>
                        </div>
                    </div>
                    <div style={Object.assign({})} style={{backgroundColor: this.state.color}}>
                        <div className="artworkWrapper">
                            <img draggable="false" className="coverImage noselect" src={require("../images/ep1-cover.png")} alt="fuck"/>
                            <img draggable="false" className="tracklistImage noselect" src={require("../images/ep1-back.jpeg")} alt="fuck"/>
                        </div>
                    </div>
                </SwipeableViews>
                <Pagination dots={3} index={index} onChangeIndex={this.handleChangeIndex} />                
            </div>
    );
}}

