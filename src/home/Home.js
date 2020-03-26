import React, { Component } from 'react';
import './Home.css';
import ImageLoader from '../components/ImageLoader'
import NavigationHeader from '../components/NavigationHeader';

export default class Home extends Component {
  render() {
    return (
    <div 
      style={{
        msOverflowStyle: "none",
        overflow: "scroll"
      }}
      className="Home">
        <NavigationHeader/>
        <div className="imageLoaderContainer">
          <ImageLoader/> 
        </div>
        <div className="contentContainer">
          <div className="mainLeftContainer childContent">
            <div className="brandNameContainer leftContainerChild">
              pacific
            </div>
            <div className="nameSubContainer leftContainerChild">
              <div className="leftSubContainer nameSubChild">
                <div className="leftSubTitle">music</div>
                <div className="leftDescription">lorem ipsum dolor sit amet, vis ea deleniti pertinax tincidunt</div>
              </div>
              <div className="middleSubContainer nameSubChild">
                <div className="middleSubTitle">journal</div>
                <div className="middleDescription">lorem ipsum dolor sit amet, vis e</div>
              </div>
              <div className="rightSubContainer nameSubChild">
                <div className="rightSubTitle">films</div>
                <div className="rightDescription">lorem ipsum dolor sit amet, vis ea deleniti</div>
              </div>
            </div>
          </div>


          <div className="mainRightContainer childContent">
            <div className="brandLogoContainer">
              <img id="brandLogo" src={require("../images/squiggles.png")} alt="fuck"/>

            </div>
            <div className="logoSubContainer">
              <div>pacificfilmstudio@gmail.com</div>
              <div>@pacific.film</div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
