import React, { Component } from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import './HomeMobile.css';
import ImageLoaderMobile from '../components-mobile/ImageLoaderMobile'
import NavigationHeader from '../components/NavigationHeader';
import { Link } from 'react-router-dom';  


export default class Home extends Component {
  render() {
    return (
    <div 
      style={{
        msOverflowStyle: "none",
        overflow: "scroll"
      }}
      className="Home">
        <div className="imageLoaderContainer">
          <ImageLoaderMobile/> 
        </div>
        <div className="contentContainer">
          <div className="childContent">
            <div className="leftGridContainer">
              <div class="grid-item">

              </div>
              <div className="grid-item">
                <div className="brandName brandChild">
                  pacific
                </div>
              </div>
              <div className="grid-item">

              </div>
              
              <div className="grid-item nameSubChild">
                <Link to="/music" className="homePageNav">
                  <div className="leftSubTitle">music</div>
                  <div className="leftDescription">lorem ipsum dolor sit amet, vis ea deleniti pertinax tincidunt</div>
                </Link>
              </div>
              <div className="grid-item nameSubChild">
                <Link to="/journal" className="homePageNav">
                  <div className="middleSubTitle">journal</div>
                  <div className="middleDescription">lorem ipsum dolor sit amet, vis e</div>
                </Link>
              </div>
              <div className="grid-item nameSubChild">
                <Link to="/films" className="homePageNav">
                  <div className="rightSubTitle">films</div>
                  <div className="rightDescription">lorem ipsum dolor sit amet, vis ea deleniti</div>
                </Link>
              </div>
              <div className="grid-item nameSubChild contactInfoCopy">
                <div>pacificfilmstudio@gmail.com</div>
                <div>@pacific.film</div>
              </div>
            </div>
          </div>
          
          <div className="rightChild childContent">
            <div className="rightGridContainer">
              <div className="grid-item">
                <div className="brandLogoContainer">
                    <img id="brandLogo" src={require("../images/squiggles.png")} alt="fuck"/>
                  </div>
              </div>
              <div className="grid-item logoSub logoSubChild">
                <div>pacificfilmstudio@gmail.com</div>
                <div>@pacific.film</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
