import React, { Component } from 'react';
import $ from 'jquery';
import JournalEntryMobile from './JournalEntryMobile';
import JournalMobile from './JournalMobile'
import { Route } from 'react-router-dom';

export default class JournalRouterMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        journalObject: props.dbdata
    };
  }

  render() {
    return (
            <div>
                <Route exact path={this.props.match.path} render={(props) => <JournalMobile {...props} entries={this.state.journalObject.journalEntries} linkPrefix={this.props.match.path}/>} />
                {this.state.journalObject.journalEntries.map((item,i) => {
                  return (
                    <Route path={`${this.props.match.path}/${item.id}`} render={(props) => <JournalEntryMobile {...props} entry={item}/>}/>
                  )
                })}
            </div>
    )}
}