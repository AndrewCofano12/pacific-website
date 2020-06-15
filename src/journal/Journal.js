import React, { Component } from 'react';
import JournalElement from './JournalElement'
import NavigationHeader from '../components/NavigationHeader';
import './Journal.css'
import LazyLoad from 'react-lazyload';
import $ from 'jquery';

export default class Journal extends Component {
  constructor(props) {
    super(props);
    this.state = {
        entries: props.entries
    };
  }

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
        className="Journal">
          {this.state.entries.map((item,i) => {
                  return (
                  <LazyLoad key={i} once>
                    <JournalElement 
                      imgSrc={item.coverImageSrc} 
                      title={item.title} 
                      shotBy={item.shotBy} 
                      id={item.id} 
                      linkPrefix={this.props.linkPrefix}
                    />
                  </LazyLoad>

                  )
          })}
        </div>
      </div>
    );
  }
}
