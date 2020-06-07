import React, { Component } from 'react';
import './JournalEntryElementMobile.css';
require('typeface-questrial')


export default class JournalEntryElementMobile extends Component {
  render() {
    return (
      <article class="journal-article">
          <div class="container">
            <img class="entry-img" src={require('../images/' + this.props.imgSrc)} alt="fuck"/>
            <div className="centered">
              <text style={{marginRight: 20}} className="titleText">{this.props.title}</text>
              <text className="titleText">{this.props.shotBy ? `shot by ${this.props.shotBy}` : ''}</text>
            </div>  
        </div>             
      </article>
      // {/* <div 
      // style={{
      //   flexDirection: 'column',
      //   marginBottom: '20%',
      //   width: '50%',
      //   height: '50%'
      // }}
      // className="JournalContainer">
      //   <img style={{
      //               maxWidth: '100%',
      //               height: "auto", 
      //               width: 'auto',
      //           }} 
      //           src={require('../images/' + this.props.imgSrc)} alt="fuck"/>
      //     <div className="centered">
      //         <text style={{marginRight: 20}} className="Text">{this.props.title}</text>
      //         <text className="Text">{this.props.shotBy ? `shot by ${this.props.shotBy}` : ''}</text>
            
      //     </div>
      // </div> */}
    );
  }
}
