import React, { Component } from 'react';
import './App.css';
import Journal from './journal/Journal';
import Home from './home/Home';

import ImageLoader from './components/ImageLoader'
import NavigationHeader from './components/NavigationHeader';
import { Router } from 'react-router-dom';
import history from './services/history';
import Routes from './routes';

require('typeface-questrial')



export default class App extends Component {

  render() {
    return (
      //  <Home/>
      <Journal/>
      // <div 
      // style={{
      //   msOverflowStyle: "none",
      //   overflow: "scroll",
      //   flexDirection: 'column',
      // }}
      // className="App">
      //   <Router history={history}>
      //       <Routes />
      //   </Router>
      //   <NavigationHeader/>
      //   <ImageLoader/>
      //   <ImageLoader/>
      //   <ImageLoader/>
      //   <ImageLoader/>
      //   <ImageLoader/> 
      // </div>
    );
  }
}
