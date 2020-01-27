import React, { Component } from 'react';
import './App.css';
import ImageLoader from './components/ImageLoader'

export default class App extends Component {

  render() {
    return (
      <div 
      style={{
        msOverflowStyle: "none",
        overflow: "scroll",
        flexDirection: 'column',
      }}
      className="App">
        <ImageLoader/>
        <ImageLoader/>
        <ImageLoader/>
        <ImageLoader/>
        <ImageLoader/> 
      </div>
    );
  }
}
