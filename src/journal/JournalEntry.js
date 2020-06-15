import React, { Component } from 'react';
import JournalEntryElement from './JournalEntryElement'
import NavigationHeader from '../components/NavigationHeader';
import './JournalEntry.css';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';



export default class JournalEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
        entryObject: props.entry
    };
  }


  render() {
    return (
      <div>
        <div className="journalEntry-logoContainer">
          <Link to="/" className="journalEntryMobile-logoName">
            <div className="journalEntry-logoName">pacific</div>
          </Link>
        </div>
        <div 
        style={{
          display: 'flex',
          paddingTop: '9%',
          flexDirection: 'column',
          alignItems: 'center'
          
        }}
        className="JournalEntry">
          <LazyLoad once>
            <JournalEntryElement showText={true} imgSrc={this.state.entryObject.coverImageSrc} title={this.state.entryObject.title} shotBy={this.state.entryObject.shotBy}/>
          </LazyLoad>
          {this.state.entryObject.images.map((item,i) => {
            return (
              <LazyLoad key={i} once>
                <JournalEntryElement key={i} imgSrc={item}/>
              </LazyLoad>
              )
          })}

        </div>
      </div>
    );
  }
}
