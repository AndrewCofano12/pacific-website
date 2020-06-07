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
//import HomeMobile from './components-mobile/HomeMobile';
import Films from './films/Films'
import JournalEntry from './journal/JournalEntry';

require('typeface-questrial')

export default class App extends Component {

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
            <Route path="/journal/summer">
              <JournalEntry />
            </Route>
          </BrowserView>
          </Switch>
      </div>
    );
  }
}
