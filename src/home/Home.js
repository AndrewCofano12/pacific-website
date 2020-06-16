import React, { Component } from 'react';
import './Home.css';
import ImageLoader from '../components/ImageLoader';
import { Link } from 'react-router-dom';  
import $ from 'jquery';
import _ from 'lodash';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        homeObject: props.dbdata
    };
}


  componentDidMount() {
    document.addEventListener('wheel', function (event) {
      
          //leave zoom
          if (event.ctrlKey) return true;
          event.preventDefault();
          event.stopPropagation();

          var delta = '';

          var FF = !(window.mozInnerScreenX == null);
          if (FF) {
              delta = event.deltaX !== 0 ? event.deltaX : event.deltaY;
              delta *= -5;
          } else {
              delta = event.wheelDelta;
          }

          $(window).scrollLeft($(window).scrollLeft() - (delta / 10));

          return false;

    }, {passive: false});
  }
  
  render() {
    return (
    <div 
      style={{
        msOverflowStyle: "none",
        overflow: "scroll"
      }}
      className="Home">
        <div className="home-imageLoaderContainer">
          <ImageLoader images={this.state.homeObject.images}/> 
        </div>
        <div className="home-contentContainer">
          <div className="home-childContent">
            <div className="home-leftGridContainer">
              
              <div className="home-gridItem">

              </div>
              <div className="home-gridItem">
                <div className="home-brandNameText home-brandChild">
                  pacific
                </div>
              </div>
              <div className="home-gridItem">
              </div>
              
              <div className="home-gridItem home-nameSubChild">
                <Link to="/music" className="home-homePageNav">
                  <div className="home-leftSubTitle home-titleText">music</div>
                  <div className="home-subtext">universial connection in energy</div>
                </Link>
              </div>
              <div className="home-gridItem home-nameSubChild">
                <Link to="/journal" className="home-homePageNav">
                  <div className="home-middleSubTitle home-titleText">narrative</div>
                  <div className="home-subtext">portraying stories of personal nature.</div>
                </Link>
              </div>
              <div className="home-gridItem home-nameSubChild">
                <Link to="/films" className="home-homePageNav">
                  <div className="home-rightSubTitle home-titleText">visual</div>
                  <div className="home-subtext">motion landscape</div>
                </Link>
              </div>
              <div className="home-gridItem home-nameSubChild home-contactInfoCopy">
                <div>pacificfilmstudio@gmail.com</div>
                <div>@pacific.film</div>
              </div>
            </div>
          </div>
          
          <div className="home-rightChild home-childContent">
            <div className="home-rightGridContainer">
              <div className="home-gridItem">
                <div className="home-brandLogoContainer">
                    <img id="home-brandLogoImage" src={require("../images/squiggles.png")} alt="fuck"/>
                  </div>
              </div>
              <div className="home-gridItem home-logoSub home-logoSubChild">                
                <div id="home-atIcon"><a className="home-socialLink" target="_blank" href="https://www.instagram.com/pacific.film/">pacific.film</a></div>
                <div className="home-email"><a className="home-socialLink" href="mailto:info@pacificfilm.com">info@pacificfilm.co</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
