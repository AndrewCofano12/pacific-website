import React, { Component } from 'react';
import JournalElement from './JournalElement'
import NavigationHeader from '../components/NavigationHeader';

export default class Journal extends Component {
  render() {
    return (
      <div>
        <NavigationHeader page="journal"/>
        <div 
        style={{
          display: 'flex',
          paddingTop: '15%',
          flexDirection: 'column',
          alignItems: 'center'
          
        }}
        className="JournalPage">
          <JournalElement imgSrc={'1.jpg'} title={'a mediterrean summer'} shotBy={'costin pirvu'}/>
          <JournalElement imgSrc={'2.jpg'} title={'a mediterrean summer'} shotBy={'costin pirvu'}/>
          <JournalElement imgSrc={'3.jpg'} title={'a mediterrean summer'} shotBy={'costin pirvu'}/>
        </div>
      </div>
    );
  }
}
