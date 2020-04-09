import React, { Component } from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import './Home.css';
import ImageLoader from '../components/ImageLoader'
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
          <ImageLoader/> 
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
          













          {/* <div className="grid-container">
            <div class="grid-item">

            </div>
            <div className="grid-item">
            <div className="brandName brandChild">
                pacific
              </div>
            </div>
            <div className="grid-item">

            </div>
            <div className="grid-item">
            <div className="brandLogoContainer">
                <img id="brandLogo" src={require("../images/squiggles.png")} alt="fuck"/>
              </div>
            </div>
            <div className="grid-item nameSubChild">
            <div className="leftSubTitle">music</div>
              <div className="leftDescription">lorem ipsum dolor sit amet, vis ea deleniti pertinax tincidunt</div>

            </div>
            <div className="grid-item nameSubChild">
            <div className="middleSubTitle">journal</div>
              <div className="middleDescription">lorem ipsum dolor sit amet, vis e</div>
   
            </div>
            <div className="grid-item nameSubChild">
            <div className="rightSubTitle">films</div>
                <div className="rightDescription">lorem ipsum dolor sit amet, vis ea deleniti</div>

            </div>
            <div className="grid-item logoSub logoSubChild">
            <div>pacificfilmstudio@gmail.com</div>
              <div>@pacific.film</div>

            </div>

          </div> */}








        {/* <Container>
          <Row>
            <Col sm={12}>
            </Col>
            <Col sm={57}>
              <div className="brandName brandChild">
                pacific
              </div>
            </Col>
            <Col sm={8}>
            </Col>
            <Col sm={4}>
              <div className="brandLogoContainer">
                <img id="brandLogo" src={require("../images/squiggles.png")} alt="fuck"/>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm>
              <div className="leftSubTitle">music</div>
              <div className="leftDescription">lorem ipsum dolor sit amet, vis ea deleniti pertinax tincidunt</div>
            </Col>
            <Col sm>
              <div className="middleSubTitle">journal</div>
              <div className="middleDescription">lorem ipsum dolor sit amet, vis e</div>
            </Col>
            <Col sm>
                <div className="rightSubTitle">films</div>
                <div className="rightDescription">lorem ipsum dolor sit amet, vis ea deleniti</div>
            </Col>
            <Col sm>
            <div>pacificfilmstudio@gmail.com</div>
              <div>@pacific.film</div>

            </Col>
          </Row>
      </Container> */}
        </div>
      </div>
    );
  }
}
