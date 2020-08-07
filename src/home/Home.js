import React, { Component } from 'react';
import './Home.css';
import ImageLoader from '../components/ImageLoader';
import { Link } from 'react-router-dom';  
import $ from 'jquery';
import _ from 'lodash';
import config from '../config';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        homeObject: props.dbdata,
        dbImages: null
    };
}

  changeScroll = (event) => {
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
  }

  componentDidMount() {
    
      document.addEventListener('wheel', this.changeScroll, {passive: false});
      // // Call our fetch function below once the component mounts
      // this.callBackendAPI()
      //   .then(res => this.setState({ data: res }))
      //   .catch(err => console.log(err));
      }



  //   // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  //   callBackendAPI = async () => {
  //   // const response = await fetch(`${config.API_URI}/`);
  //   const response = await fetch("/");
  //   const body = await response.json();

  //   if (response.status !== 200) {
  //     throw Error(body.message) 
  //   }
  //   return body;
  // };
  

  componentWillUnmount() {
    document.removeEventListener('wheel', this.changeScroll)
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
            <div className="home-gridContainer home-leftGridContainer">
              
              <div className="home-gridItem">

              </div>
              <div className="home-gridItem home-brandGridItem">
                <div className="home-brandNameText home-brandChild">
                  pacific
                </div>
              </div>
              <div className="home-gridItem">
              </div>
              
              <div className="home-gridItem home-subChild home-nameSubChild">
                <Link to="/music" className="home-homePageNav">
                  <div className="home-leftSubTitle home-titleText">music</div>
                  <div className="home-subtext">collective progression <br className="home-break"/> of sound</div>
                </Link>
              </div>
              <div className="home-gridItem home-subChild home-nameSubChild">
                <Link to="/narrative" className="home-homePageNav">
                  <div className="home-middleSubTitle home-titleText">narrative</div>
                  <div className="home-subtext">portraying stories of personal nature</div>
                </Link>
              </div>
              <div id="home-visualLink" className="home-gridItem home-subChild home-nameSubChild">
                <Link to="/films" className="home-homePageNav">
                  <div className="home-rightSubTitle home-titleText">visual</div>
                  <div className="home-subtext">motion in form and figure</div>
                </Link>
              </div>
              <div className="home-gridItem home-nameSubChild home-subChild home-contactInfoCopy">
                <div className="home-contactText">pacificfilmstudio@gmail.com</div>
                <div>@pacific.film</div>
              </div>
            </div>
          </div>
          
          <div className="home-rightChild home-childContent">
            <div className="home-gridContainer  home-rightGridContainer">
              <div className="home-gridItem">
                <div className="home-brandLogoContainer">
                    <img id="home-brandLogoImage" src={require("../images/squiggles.png")} alt="fuck"/>
                  </div>
              </div>
              <div className="home-gridItem home-logoSub home-logoSubChild home-subChild home-homePageNav">                 
                <div className="home-email home-subtext"><a className="home-socialLink" href="mailto:contact@pacificfilm.co">contact@pacificfilm.co</a></div>
                <div id="home-subtext"><a className="home-socialLink" target="_blank" href="https://www.instagram.com/pacific.film/">pacific.film</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
