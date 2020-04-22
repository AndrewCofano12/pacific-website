import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import './EpisodeSlider.css'
import Pagination from '../components/pagination/Pagination';
import { handleColorOnSliderChange } from '../jslibrary.js'

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

    handleChange = (event, value) => {
        console.log("HERE")
        this.setState({
            index: value + 1,
        });

        console.log(this.state)
    };


    componentDidMount() {  
        
        window.addEventListener("scroll", this.handleChange.bind(this))
    }


    render() {
    //     var lastScrollTop = 0;
    //   // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
    //   element.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
    //      var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    //      if (st > lastScrollTop){
            
    //      } else {
    //         // upscroll code
    //      }
    //      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    //   }, false);
        const { index } = this.state.index;

        return (
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <SwipeableViews className="swipeableView" enableMouseEvents={true} axis="x" 
                draggable={false}
                index={index} 
                ignoreNativeScroll={true}
                enableMouseEvents={true}
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

