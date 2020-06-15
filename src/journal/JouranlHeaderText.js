import React, { Component, Text } from 'react';
import './JournalHeaderText.css';
require('typeface-questrial')


export default class JournalHeaderText extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
          <div className={`${this.props.link ? 'journalHeaderText-link' : 'journalHeaderText-noHighlight'} journalHeaderText-centered`}>
              <div className="journalHeaderText-titleTextContainer">
                {this.props.title.map((item,i) => {
                  return (
                    <div className="journalHeaderText-headerText">{item}</div>
                  )
                })}
              </div>
              <div className="journalHeaderText-shotTextContainer">
                {this.props.shotBy.map((item,i) => {
                  if (i == 0) {
                    return (<div className="journalHeaderText-headerText">shot by {item}</div>)
                  }
                  else {
                    return (<div className="journalHeaderText-headerText">{item}</div>)
                  }
                })}
              </div>
          </div>
    );
  }
}
