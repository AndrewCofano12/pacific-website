import React, { Component } from 'react';
import './HomeMobile.css';
import ImageLoaderMobile from '../components-mobile/ImageLoaderMobile'
import { Link } from 'react-router-dom';  


export default class HomeMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        homeObject: props.dbdata
    };
}

  componentDidMount () {
    window.onscroll = function() {myFunction()};

    var header = document.getElementById("homeMobile-logoHeader");
    var sticky = header.offsetTop;

    function myFunction() {
      if (window.pageYOffset + 50 > sticky) {
        header.classList.add("homeMobile-sticky");
      } else {
        header.classList.remove("homeMobile-sticky");
      }
    }
  
  }



  render() {
    return (
    <div className="HomeMobile">
        <a name="top"></a>
        <div className="homeMobile-imageLoaderContainer">
          <ImageLoaderMobile images={this.state.homeObject.images}/> 
        </div>
          <div className="homeMobile-spacerContainer"></div>
          <div className="homeMobile-brandContainer" id="homeMobile-logoHeader">
            <div className="homeMobile-brandName">
              <a href="#top">
                pacific
              </a>
            </div>
          </div>
          <div className="homeMobile-subContainer">
            <div className="homeMobile-nameSubChild">
              <Link to="/music" className="homeMobile-homePageNav">
                <div className="homeMobile-subTitle">music</div>
                <div className="homeMobile-leftDescription">collective progression <br className="homeMobile-break"/> of sound</div>
              </Link>
            </div>
            <div className="homeMobile-nameSubChild">
              <Link to="/narrative" className="homeMobile-homePageNav">
                <div className="homeMobile-subTitle">narrative</div>
                <div className="homeMobile-middleDescription">portraying stories of personal nature</div>
              </Link>
            </div>
            <div className="homeMobile-nameSubChild">
              <Link to="/visual" className="homeMobile-homePageNav">
                <div className="homeMobile-subTitle">visual</div>
                <div className="homeMobile-rightDescription">motion in form and figure</div>
              </Link>
            </div>
            <div className="homeMobile-nameSubChild homeMobile-contactInfoCopy">
              <div><a className="homeMobile-emailLink" href="mailto:contact@pacificfilm.co">contact@pacificfilm.co</a></div>
              <div><a className="homeMobile-socialLink" href="https://www.instagram.com/pacific.film/" target="_blank">pacific.film</a></div>
            </div>
                </div>
        </div>
    );
  }
}
