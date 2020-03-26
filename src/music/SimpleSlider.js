import React, { Component } from "react";
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import './MusicStyles.css';



export default class SimpleSlider extends Component {

  
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
      return (
        <div className="tryingToFixShit">
        <Slider {...settings}>
            <div>
              <div className="artworkWrapper">
                  <div className="coverContainer flex-item">
                      <img className="coverImage" src={require("../images/ep2-front.jpg")} alt="fuck"/>
                  </div>
                  <div className="tracklistContainer flex-item">
                      <img className="tracklistImage" src={require("../images/ep2-back.jpg")} alt="fuck"/>
                  </div>
              </div>
            </div>
            <div>
              <div className="artworkWrapper">
                <div className="coverContainer flex-item">
                      <img className="coverImage" src={require("../images/ep1-cover.png")} alt="fuck"/>
                  </div>
                  <div className="tracklistContainer flex-item">
                      <img className="tracklistImage" src={require("../images/ep1-back.jpeg")} alt="fuck"/>
                  </div>
              </div>
            </div>
        </Slider>
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </div>
      );
    }
  }