import React, { Component } from 'react';
import './Home.css';
import ImageLoader from '../components/ImageLoader'
import NavigationHeader from '../components/NavigationHeader';

export default class Home extends Component {
  render() {
    return (
    <div 
      style={{
        msOverflowStyle: "none",
        overflow: "scroll",
        flexDirection: 'column',
      }}
      className="Home">
        <NavigationHeader/>

        <ImageLoader/> 
      </div>
    );
  }
}
