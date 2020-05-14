import React, {Component} from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch, withRouter } from 'react-router-dom';  
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import Journal from './journal/Journal';
import Music from './music/Music';
import Home from './home/Home';
import HomeMobile from './components-mobile/HomeMobile';
import Films from './films/Films'
require('typeface-questrial')

export default class App extends Component {

  componentDidMount() {
    
  }




  render() {
    return (
      <div>
        <Switch>
          <BrowserView>
            <Route path="/music">
              <Music />
            </Route>
            <Route path="/films">
              <Films />
            </Route>
            <Route path="/journal">
              <Journal/>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </BrowserView>
          </Switch>
      </div>
    );
  }
}
