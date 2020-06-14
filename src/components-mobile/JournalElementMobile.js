import React, { Component } from 'react';
import './JournalElementMobile.css';
import { Link } from 'react-router-dom';  
require('typeface-questrial')


export default class JournalElementMobile extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div 
      style={{
        flexDirection: 'column',
        marginBottom: '12%',
        width: '69%',
      }}
      className="journalElMobile-journalContainer">
        <Link to={`${this.props.linkPrefix}/${this.props.id}`}>
        <img style={{
                    maxWidth: '100%',
                    height: "auto", 
                    width: 'auto',
                }} 
                src={require('../images/' + this.props.imgSrc)} alt="fuck"/>
          <div className="journalElMobile-centered">
              <text style={{marginRight: 20}} className="journalElMobile-titleText">{this.props.title}</text>
              <text className="journalElMobile-titleText">shot by {this.props.shotBy}</text>
            
          </div>
          </Link>

      </div>
    );
  }
}
