import React, { Component } from 'react';
import './JournalElement.css';
import { Link } from 'react-router-dom';  

require('typeface-questrial')


export default class JournalElement extends Component {
  render() {
    return (
      <div 
      style={{
        flexDirection: 'column',
        marginBottom: '12%',
        width: '69%',
      }}
      className="JournalContainer">
        <Link to="/journal/summer" class="pageNav">
        <img style={{
                    maxWidth: '100%',
                    height: "auto", 
                    width: 'auto',
                }} 
                src={require('../images/' + this.props.imgSrc)} alt="fuck"/>
          <div className="centered">
              <text style={{marginRight: 20}} className="Text">{this.props.title}</text>
              <text className="Text">shot by {this.props.shotBy}</text>
            
          </div>

          </Link>
      </div>
    );
  }
}
