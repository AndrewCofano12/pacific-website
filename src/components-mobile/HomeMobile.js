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
        <div className="homeMobile-imageLoaderContainer">
          <ImageLoaderMobile images={this.state.homeObject.images}/> 
        </div>
          <div className="homeMobile-spacerContainer"></div>
          <div className="homeMobile-brandContainer" id="homeMobile-logoHeader">
            <div className="homeMobile-brandName">
              pacific
            </div>
          </div>
          <div className="homeMobile-subContainer">
            <div className="homeMobile-nameSubChild">
              <Link to="/music" className="homeMobile-homePageNav">
                <div className="homeMobile-subTitle">music</div>
                <div className="homeMobile-leftDescription">lorem ipsum dolor sit amet, vis ea deleniti pertinax tincidunt</div>
              </Link>
            </div>
            <div className="homeMobile-nameSubChild">
              <Link to="/journal" className="homeMobile-homePageNav">
                <div className="homeMobile-subTitle">journal</div>
                <div className="homeMobile-middleDescription">lorem ipsum dolor sit amet, vis e</div>
              </Link>
            </div>
            <div className="homeMobile-nameSubChild">
              <Link to="/films" className="homeMobile-homePageNav">
                <div className="homeMobile-subTitle">films</div>
                <div className="homeMobile-rightDescription">lorem ipsum dolor sit amet, vis ea deleniti</div>
              </Link>
            </div>
            <div className="homeMobile-nameSubChild homeMobile-contactInfoCopy">
              <div><a className="homeMobile-emailLink" href="mailto:pacificfilmstudio@gmail.com">pacificfilmstudio@gmail.com</a></div>
              <div><a className="homeMobile-socialLink" href="https://www.instagram.com/pacific.film/">@pacific.film</a></div>
            </div>
                </div>
        </div>
    );
  }
}
