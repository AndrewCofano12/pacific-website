import React, { Component } from 'react';
import './JournalElement.css';
import { Link } from 'react-router-dom';  

require('typeface-questrial')


export default class JournalElement extends Component {


  hideJournalElementImage() {
    console.log("hide journal element image")
  }


  render() {
    return (
      
      <div 
      className="JournalContainer"
      style={{flexDirection: 'column',marginBottom: '12%',width: '69%'}}
      onClick={() => {this.hideJournalElementImage()}}>
        <Link to="journal/element">
        <img 
        style={{
                    maxWidth: '100%',
                    height: "auto", 
                    width: 'auto',
                }} 
                src={require('../images/' + this.props.imgSrc)} 
                alt="fuck"
                />
          <div className="centered">
              <text style={{marginRight: 20}} className="Text">{this.props.title}</text>
              <text className="Text">shot by {this.props.shotBy}</text>
          </div>

          </Link>
      </div>
    );
  }
}
