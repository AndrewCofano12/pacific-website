import React, { Component } from 'react';
import './NarrativeElement.css';
require('typeface-questrial')


export default class NarrativeElement extends Component { 
  constructor(props) {
    super(props);
    this.state = {
        element: props.itemData
    }
  }

  render() {
    return (
      <article className="narrative-elementArticle" style={{marginBottom: `${this.state.element.bottomSpacing}px`}}>
          <div className={`narrative-elementContainer narrative-element-${this.state.element.size}`}>
            <img draggable="false" className="narrative-img narrative-noselect" src={`http://narc:deepinbopz@pacificfilm.co/wp-content/images/narrative/${this.state.element.file}`} alt="fuck"/>
            {/* <img draggable="false" className="narrative-img narrative-noselect" src={`http://www.pacificfilm.co/wp-content/images/narrative/${this.state.element.file}`} alt="fuck"/> */}
        </div>
      </article>
    );
  }
}
