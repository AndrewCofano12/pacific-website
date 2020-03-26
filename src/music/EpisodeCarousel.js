import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import './MusicStyles.css';
import Films from '../films/Films'
 
export default class EpisodeCarousel extends Component {
    render() {
        return (
            <Carousel>
                {/* <div> */}
                {/* <img className="coverImage" src={require("../images/ep2-front.jpg")} alt="fuck"/> */}
                <div><Films/></div>
                <div><Films/></div>
                {/* </div> */}
                {/* <div>
                    <div className="coverContainer flex-item">
                        <img className="coverImage" src={require("../images/ep2-front.jpg")} alt="fuck"/>
                    </div>
                    <div className="tracklistContainer flex-item">
                        <img className="tracklistImage" src={require("../images/ep2-back.jpg")} alt="fuck"/>
                    </div>
                </div> */}
            </Carousel>
        );
    }
}

//ReactDOM.render(<EpisodeCarousel />, document.querySelector('.demo-carousel'));
