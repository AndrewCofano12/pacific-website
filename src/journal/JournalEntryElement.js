import React, { Component } from 'react';
import './JournalEntryElement.css';
require('typeface-questrial')


export default class JournalEntryElement extends Component {  
  render() {
    return (
      <article class="journalEntryEl-journalArticle">
          <div class="journalEntryEl-container">
            <img class="journalEntryEl-entryImg" src={require('../images/' + this.props.imgSrc)} alt="fuck"/>
            <div className="journalEntryEl-centered">
              <text style={{marginRight: 20}} className="journalEntryEl-text">{this.props.title}</text>
              <text className="journalEntryEl-text">{this.props.shotBy ? `shot by ${this.props.shotBy}` : ''}</text>
            </div>  
        </div>             
      </article>
    );
  }
}
