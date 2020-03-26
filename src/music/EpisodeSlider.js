import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import './EpisodeSlider.css'

export default class EpisodeSlider extends Component {
    render() {
        return (
            <SwipeableViews className="swipeableView" enableMouseEvents={true} axis="x">
                {/* <div style={Object.assign({})}> */}
                    <div className="artworkWrapper">
                        {/* <div className="coverContainer flex-item"> */}
                            <img className="coverImage" src={require("../images/ep2-front.jpg")} alt="fuck"/>
                        {/* </div> */}
                        {/* <div className="tracklistContainer flex-item"> */}
                            <img className="tracklistImage" src={require("../images/ep2-back.jpg")} alt="fuck"/>
                        {/* </div> */}
                    </div>
                {/* </div> */}
                {/* <div style={Object.assign({})}> */}
                    <div className="artworkWrapper">
                        <div className="coverContainer flex-item">
                            <img className="coverImage" src={require("../images/ep1-cover.png")} alt="fuck"/>
                        </div>
                        <div className="tracklistContainer flex-item">
                            <img className="tracklistImage" src={require("../images/ep1-back.jpeg")} alt="fuck"/>
                        </div>
                    </div>
                {/* </div> */}

            </SwipeableViews>
    );
}}

