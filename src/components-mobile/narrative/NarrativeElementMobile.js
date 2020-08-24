import React, { Component } from 'react';
import './NarrativeElementMobile.css';
require('typeface-questrial')


export default class NarrativeMobileElement extends Component { 
  constructor(props) {
    super(props);
    this.state = {
        element: props.itemData
    }
  }

  render() {
    return (
      <article className="narrativeMobile-elementArticle" style={{marginBottom: `${this.state.element.bottomSpacing - 20}px`}}>
          <div className={`narrativeMobile-elementContainer narrativeMobile-element-${this.state.element.size}`}>
            <img draggable="false" className="narrativeMobile-img narrative-noselect" src={`https://www.pacificfilm.co/wp-content/images/narrative/${this.state.element.file}`} alt="fuck"/>
        </div>             
      </article>
    );
  }
}
