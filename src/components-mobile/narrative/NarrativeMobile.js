import React, { Component } from 'react';
import './NarrativeMobile.css';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';
import NarrativeElementMobile from './NarrativeElementMobile';
import {BsArrowLeft} from 'react-icons/bs';



export default class NarrativeMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        dbObject: props.dbdata,
        isHovering: false
    };
  }

  handleMouseHover = () => {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }


  render() {
    return (
      <div>
        <div className="narrativeMobile-logoContainer" 
        onMouseEnter={this.handleMouseHover}
        onMouseLeave={this.handleMouseHover}>
            <div className="narrativeMobile-logoName">
              <Link to="/" className="narrativeMobile-logoName" >
                pacific          
              </Link>
            </div>        
        {this.state.isHovering ? 
          (<div className="narrativeMobile-backButtonContainer">
                <Link className="narrativeMobile-backButtonLink" to="/">     
                    <BsArrowLeft className="narrativeMobile-backButton"/>
                </Link>
              </div>) : 
          null
        }


        </div>

        <div className="narrativeMobile-elementsContainer">
          {this.state.dbObject.story.map((item,i) => {
            return (
              <LazyLoad key={i} once>
                <NarrativeElementMobile itemData={item}/>
              </LazyLoad>
              )
          })}
          <div className="narrativeMobile-footer">© pacific 2020</div>
        </div>
      </div>
    );
  }
}
