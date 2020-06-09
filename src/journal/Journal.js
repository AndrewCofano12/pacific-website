import React, { Component } from 'react';
import JournalElement from './JournalElement'
import NavigationHeader from '../components/NavigationHeader';
import $ from 'jquery';

export default class Journal extends Component {

  componentDidMount() {
    document.addEventListener('wheel', function (event) {
      
      //leave zoom
      if (event.ctrlKey) return true;
      event.preventDefault();
      event.stopPropagation();

      var delta = '';

      var FF = !(window.mozInnerScreenX == null);
      if (FF) {
          delta = event.deltaX !== 0 ? event.deltaX : event.deltaY;
          delta *= -50;
      } else {
          delta = event.wheelDelta;
      }

      $(window).scrollTop($(window).scrollTop() - (delta / 10));

      return false;

    }, {passive: false});

  }

  /** 
   * Create data abstraction to map journal data structure to components
   */
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
