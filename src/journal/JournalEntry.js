import React, { Component } from 'react';
import JournalEntryElement from './JournalEntryElement'
import NavigationHeader from '../components/NavigationHeader';
import './JournalEntry.css'

export default class JournalEntry extends Component {
  render() {
    return (
      <div>
        <div className="logoContainer">
            <div className="logoName">pacific</div>
        </div>
        <div 
        style={{
          display: 'flex',
          paddingTop: '9%',
          flexDirection: 'column',
          alignItems: 'center'
          
        }}
        className="JournalPage">
          <JournalEntryElement imgSrc={'italy.jpeg'} title={'a mediterrean summer'} shotBy={'costin pirvu'}/>
          <JournalEntryElement imgSrc={'sf.jpeg'}/>
          <JournalEntryElement imgSrc={'1.jpg'}/>
          <JournalEntryElement imgSrc={'2.jpg'}/>
          <JournalEntryElement imgSrc={'3.jpg'}/>
          <JournalEntryElement imgSrc={'1.jpg'}/>
          <JournalEntryElement imgSrc={'1.jpg'}/>
          
        </div>
      </div>
    );
  }
}
