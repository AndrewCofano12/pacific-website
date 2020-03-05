import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch, withRouter } from 'react-router-dom';  
import Journal from './journal/Journal';
import Music from './music/Music';
import Home from './home/Home'
import Films from './films/Films'
require('typeface-questrial')

export default function App() {
  return (
    <div>
      <Switch>
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
      </Switch>
    </div>
  );
}
