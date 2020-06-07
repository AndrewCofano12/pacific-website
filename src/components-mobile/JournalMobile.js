import React, { Component } from 'react';
import JournalElementMobile from './JournalElementMobile'
import NavigationHeader from '../components/NavigationHeader';

export default class JournalMobile extends Component {
  render() {
    return (
      <div>
        <NavigationHeader page="journal"/>
        <div 
        style={{
          display: 'flex',
          paddingTop: '40%',
          flexDirection: 'column',
          alignItems: 'center'
          
        }}
        className="JournalPage">
          <JournalElementMobile imgSrc={'italy.jpeg'} title={'a mediterrean summer'} shotBy={'costin pirvu'}/>
          <JournalElementMobile imgSrc={'sf.jpeg'} title={`my city's filthy`} shotBy={'andrew cofano'}/>
          <JournalElementMobile imgSrc={'palms.jpeg'} title={'back in the OC'} shotBy={'costin pirvu'}/>
        </div>
      </div>
    );
  }
}
