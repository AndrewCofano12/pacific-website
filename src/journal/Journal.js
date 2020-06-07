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
          paddingTop: '9%',
          flexDirection: 'column',
          alignItems: 'center'
          
        }}
        className="JournalPage">
          <JournalElement imgSrc={'italy.jpeg'} title={'a mediterrean summer'} shotBy={'costin pirvu'}/>
          <JournalElement imgSrc={'sf.jpeg'} title={`my city's filthy`} shotBy={'andrew cofano'}/>
          <JournalElement imgSrc={'palms.jpeg'} title={'back in the OC'} shotBy={'costin pirvu'}/>
        </div>
      </div>
    );
  }
}
