import React, { Component } from 'react';
import './Home.css';
import ImageLoader from '../components/ImageLoader'

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
        <ImageLoader/> 
        <ImageLoader/> 
      </div>
    );
  }
}
