import React, { Component, Text } from 'react';
import './JournalElement.css';
import { Link } from 'react-router-dom';  
require('typeface-questrial')


export default class JournalElement extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      
      <div 
      className="journalEl-journalContainer"
      style={{flexDirection: 'column', marginBottom: '12%',width: '69%'}}>
        <Link to={`${this.props.linkPrefix}/${this.props.id}`}>
        <img 
        style={{
                    maxWidth: '100%',
                    height: "auto", 
                    width: 'auto',
                }} 
                src={require('../images/' + this.props.imgSrc)} 
                alt="fuck"
                />
          <div className="journalEl-centered">
              <span style={{marginRight: 20}} className="journalEl-text">{this.props.title}</span>
              <span className="journalEl-text">shot by {this.props.shotBy}</span>
          </div>

          </Link>
      </div>
    );
  }
}
