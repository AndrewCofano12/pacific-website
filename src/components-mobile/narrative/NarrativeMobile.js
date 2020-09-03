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


  render() {
    return (
      <div>
        <div className="narrativeMobile-logoContainer">
            <div className="narrativeMobile-logoName">
              <Link to="/" className="narrativeMobile-logoName" >
                pacific          
              </Link>
            </div>        


        </div>

        <div className="narrativeMobile-elementsContainer">
          {this.state.dbObject.story.map((item,i) => {
            return (
              <LazyLoad key={i} once>
                <NarrativeElementMobile itemData={item}/>
              </LazyLoad>
              )
          })}
          <div className="narrativeMobile-footer">
            <div className="narrativeMobile-footerLine">Begin the process with the end in mind.</div>
            <div className="narrativeMobile-footerLine">Don't lose sight.</div>
          </div>
        </div>
      </div>
    );
  }
}
