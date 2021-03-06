import React, { Component } from 'react';
import './NarrativeElement.css';
import ImagePlaceholder from '../components/ImagePlaceholder';

require('typeface-questrial');

export default class NarrativeElement extends Component { 
  constructor(props) {
    super(props);
    this.state = {
        element: props.itemData,
        imgLoaded: false
    }
  }


  handleImageLoaded() {
    this.setState({ imgLoaded: true});
  }



  render() {
    const loaded = this.state.imgLoaded;
    const imageStyle = loaded ? {} : { display: "none" }; 
    return (
      <article className="narrative-elementArticle" style={{marginBottom: `${this.state.element.bottomSpacing}px`}}>
          <div className={`narrative-elementContainer narrative-element-${this.state.element.size}`}>
            {loaded ? null : <ImagePlaceholder grid={false} narrative={true}/>}
            <img draggable="false" style={imageStyle} onLoad={this.handleImageLoaded.bind(this)} className="narrative-img narrative-noselect" src={`https://www.pacificfilm.co/wp-content/images/narrative/${this.state.element.file}`} alt="img"/>
        </div>
      </article>
    );
  }
}
