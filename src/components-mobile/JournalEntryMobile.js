import React, { Component } from 'react';
import JournalEntryElementMobile from './JournalEntryElementMobile';
import './JournalEntryMobile.css';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';

export default class JournalEntryMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        entryObject: props.entry
    };
  }

  render() {
    return (
      <div>
        <div className="journalEntryMobile-logoContainer">
          <Link to="/" className="journalEntryMobile-logoName">
            <div className="journalEntryMobile-logoName">pacific</div>
          </Link>
        </div>
        <div 
        style={{
          display: 'flex',
          paddingTop: '30%',
          flexDirection: 'column',
          alignItems: 'center'
          
        }}
        className="JournalEntryMobile">
          <LazyLoad height="400" once>
            <JournalEntryElementMobile imgSrc={this.state.entryObject.coverImageSrc} title={this.state.entryObject.title} shotBy={this.state.entryObject.shotBy}/>
          </LazyLoad>
          {this.state.entryObject.images.map((item,i) => {
            return (
              <LazyLoad height="400" key={i} once>
                <JournalEntryElementMobile imgSrc={item}/>
              </LazyLoad>
              )
          })}
          
        </div>
      </div>
    );
  }
}
