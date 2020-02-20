import React, { Component } from 'react';
import './JournalElement.css';
require('typeface-questrial')

export default class JournalElement extends Component {
  render() {
    return (
      <div 
      style={{
        flexDirection: 'column',
        marginBottom: '15%'
      }}
      className="JournalContainer">
        <img style={{
                    maxWidth: '100%',
                    height: "auto", 
                    width: "auto",
                }} 
                src={require('../images/' + this.props.imgSrc)} alt="fuck"/>
          <div style={{flexDirection: 'row', marginTop: 15}} className="JournalTextContainer">
              <text style={{marginRight: 20, fontWeight: 600}} className="Text">{this.props.title}</text>
              <text className="Text">shot by {this.props.shotBy}</text>
            
          </div>
      </div>
    );
  }
}
