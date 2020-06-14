import React, { Component } from 'react';
import $ from 'jquery';
import JournalEntry from './JournalEntry';
import Journal from './Journal'
import { Route } from 'react-router-dom';

export default class JournalRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
        journalObject: props.dbdata
    };
  }

  render() {
    return (
            <div>
                <Route exact path={this.props.match.path} render={(props) => <Journal {...props} entries={this.state.journalObject.journalEntries} linkPrefix={this.props.match.path}/>} />
                {this.state.journalObject.journalEntries.map((item,i) => {
                  return (
                    <Route path={`${this.props.match.path}/${item.id}`} key={i} render={(props) => <JournalEntry {...props} entry={item}/>}/>
                  )
                })}
            </div>
    )}
}
