import React, { Component } from 'react';
import './Narrative.css';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';
import NarrativeElement from './NarrativeElement';
import {BsArrowLeft} from 'react-icons/bs';



export default class Narrative extends Component {
  constructor(props) {
    super(props);
    this.state = {
        dbObject: props.dbdata
    };
  }


  render() {
    return (
      <div>
        <div className="narrative-backButtonContainer">
            <Link to="/">     
                <BsArrowLeft className="narrative-backButton"/>
            </Link>
        </div>

        <div className="narrative-logoContainer">
            <div className="narrative-logoName">
            <Link to="/" className="narrative-logoName" >
            pacific          
            </Link>
            </div>
        </div>

        <div className="narrative-elementsContainer">
          {this.state.dbObject.story.map((item,i) => {
            return (
              <LazyLoad key={i} once>
                <NarrativeElement key={i} itemData={item}/>
              </LazyLoad>
              )
          })}
          <div className="narrative-footer">© pacific 2020</div>
        </div>
      </div>
    );
  }
}
