import React, { Component } from 'react';
import './Home.css';
import ImageLoader from '../components/ImageLoader'
import NavigationHeader from '../components/NavigationHeader';

export default class Home extends Component {
  render() {
    return (
    <div 
      style={{
        
      }}
      className="Home">
        <NavigationHeader/>

        <ImageLoader/> 
      </div>
    );
  }
}
