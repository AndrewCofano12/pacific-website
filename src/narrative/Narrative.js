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
        <div className="narrative-logoContainer" 
        onMouseEnter={this.handleMouseHover}
        onMouseLeave={this.handleMouseHover}>
            <div className="narrative-logoName">
              <Link to="/" className="narrative-logoName" >
                pacific          
              </Link>
            </div>        
        {this.state.isHovering ? 
          (<div className="narrative-backButtonContainer">
                <Link className="narrative-backButtonLink" to="/">     
                    <BsArrowLeft className="narrative-backButton"/>
                </Link>
              </div>) : 
          null
        }


        </div>

        <div className="narrative-elementsContainer">
          {this.state.dbObject.story.map((item,i) => {
            return (
              <LazyLoad key={i} once>
                <NarrativeElement itemData={item}/>
              </LazyLoad>
              )
          })}
          <div className="narrative-footer">© pacific 2020</div>
        </div>
      </div>
    );
  }
}
