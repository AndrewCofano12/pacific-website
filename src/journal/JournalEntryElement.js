import React, { Component } from 'react';
import './JournalEntryElement.css';
import JournalHeaderText from './JouranlHeaderText';
require('typeface-questrial')


export default class JournalEntryElement extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      showText: props.showText
    }
  }

  showText() {
    if (this.props.showText) {
      return <JournalHeaderText link={false} title={this.props.title} shotBy={this.props.shotBy}/>
    }
  }

  render() {
    return (
      <article class="journalEntryEl-journalArticle">
          <div class="journalEntryEl-container">
            <img class="journalEntryEl-entryImg" src={require('../images/' + this.props.imgSrc)} alt="img"/>
            {this.showText()}
        </div>             
      </article>
    );
  }
}
