import React, { Component } from 'react';
import './JournalEntryElementMobile.css';
require('typeface-questrial')


export default class JournalEntryElementMobile extends Component {
  render() {
    return (
      <article class="journalEntryElMobile-journalArticle">
          <div class="journalEntryElMobile-container">
            <img class="journalEntryElMobile-entryImg" src={require('../images/' + this.props.imgSrc)} alt="fuck"/>
            <div className="journalEntryElMobile-centered">
              <text style={{marginRight: 20}} className="journalEntryElMobile-titleText">{this.props.title}</text>
              <text className="journalEntryElMobile-titleText">{this.props.shotBy ? `shot by ${this.props.shotBy}` : ''}</text>
            </div>  
        </div>             
      </article>
    );
  }
}
