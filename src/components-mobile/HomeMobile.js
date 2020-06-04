import React, { Component } from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import './HomeMobile.css';
// import './homeScript.js'
import ImageLoaderMobile from '../components-mobile/ImageLoaderMobile'
import NavigationHeader from '../components/NavigationHeader';
import { Link } from 'react-router-dom';  


export default class Home extends Component {

  componentDidMount () {
    window.onscroll = function() {myFunction()};

    var header = document.getElementById("logoHeader");
    var sticky = header.offsetTop;

    function myFunction() {
      if (window.pageYOffset + 50 > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
  
  }



  render() {
    return (
    <div className="Home">
        <div className="imageLoaderContainer">
          <ImageLoaderMobile/> 
        </div>
          <div className="spacerContainer"></div>
          <div className="brandContainer" id="logoHeader">
            <div className="brandName">
              pacific
            </div>
          </div>
          <div className="subContainer">
            <div className="nameSubChild">
              <Link to="/music" className="homePageNav">
                <div className="subTitle">music</div>
                <div className="leftDescription">lorem ipsum dolor sit amet, vis ea deleniti pertinax tincidunt</div>
              </Link>
            </div>
            <div className="nameSubChild">
              <Link to="/journal" className="homePageNav">
                <div className="subTitle">journal</div>
                <div className="middleDescription">lorem ipsum dolor sit amet, vis e</div>
              </Link>
            </div>
            <div className="nameSubChild">
              <Link to="/films" className="homePageNav">
                <div className="subTitle">films</div>
                <div className="rightDescription">lorem ipsum dolor sit amet, vis ea deleniti</div>
              </Link>
            </div>
            <div className="nameSubChild contactInfoCopy">
              <div><a className="emailLink" href="mailto:pacificfilmstudio@gmail.com">pacificfilmstudio@gmail.com</a></div>
              <div><a className="socialLink" href="https://www.instagram.com/pacific.film/">@pacific.film</a></div>
            </div>
                </div>

          {/* <div className="spacerContainer"></div>
        <div className="brandContainer">
          <div className="brandName">
            pacific
          </div>
        </div>
        <div className="subContainer">
          <div className="nameSubChild">
            <Link to="/music" className="homePageNav">
              <div className="subTitle">music</div>
              <div className="leftDescription">lorem ipsum dolor sit amet, vis ea deleniti pertinax tincidunt</div>
            </Link>
          </div>
          <div className="nameSubChild">
            <Link to="/journal" className="homePageNav">
              <div className="subTitle">journal</div>
              <div className="middleDescription">lorem ipsum dolor sit amet, vis e</div>
            </Link>
          </div>
          <div className="nameSubChild">
            <Link to="/films" className="homePageNav">
              <div className="subTitle">films</div>
              <div className="rightDescription">lorem ipsum dolor sit amet, vis ea deleniti</div>
            </Link>
          </div>
          <div className="nameSubChild contactInfoCopy">
            <div><a className="emailLink" href="mailto:pacificfilmstudio@gmail.com">pacificfilmstudio@gmail.com</a></div>
            <div><a className="socialLink" href="https://www.instagram.com/pacific.film/">@pacific.film</a></div>
          </div>
        </div> */}
        </div>
    );
  }
}
