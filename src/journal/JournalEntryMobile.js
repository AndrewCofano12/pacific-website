import React, { Component } from 'react';
import JournalEntryElementMobile from '../components-mobile/JournalEntryElementMobile'
import NavigationHeader from '../components/NavigationHeader';
import './JournalEntry.css'

export default class JournalEntryMobile extends Component {
  render() {
    return (
      <div>
        <div className="logoContainer">
            <div className="logoName">pacific</div>
        </div>
        <div 
        style={{
          display: 'flex',
          paddingTop: '30%',
          flexDirection: 'column',
          alignItems: 'center'
          
        }}
        className="JournalPage">
          <JournalEntryElementMobile imgSrc={'italy.jpeg'} title={'a mediterrean summer'} shotBy={'costin pirvu'}/>
          <JournalEntryElementMobile imgSrc={'sf.jpeg'}/>
          <JournalEntryElementMobile imgSrc={'1.jpg'}/>
          <JournalEntryElementMobile imgSrc={'2.jpg'}/>
          <JournalEntryElementMobile imgSrc={'3.jpg'}/>
          <JournalEntryElementMobile imgSrc={'1.jpg'}/>
          <JournalEntryElementMobile imgSrc={'1.jpg'}/>
          
        </div>
      </div>
    );
  }
}
