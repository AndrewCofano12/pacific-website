import React, { Component } from 'react';
import './JournalElementMobile.css';
require('typeface-questrial')


export default class JournalElementMobile extends Component {
  render() {
    return (
      <div 
      style={{
        flexDirection: 'column',
        marginBottom: '12%',
        width: '69%',
      }}
      className="JournalContainer">
        <img style={{
                    maxWidth: '100%',
                    height: "auto", 
                    width: 'auto',
                }} 
                src={require('../images/' + this.props.imgSrc)} alt="fuck"/>
          <div className="centered">
              <text style={{marginRight: 20}} className="titleText">{this.props.title}</text>
              <text className="titleText">shot by {this.props.shotBy}</text>
            
          </div>
      </div>
    );
  }
}
