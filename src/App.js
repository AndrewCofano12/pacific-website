import React, {Component} from 'react';
import './App.css';
import config from './config';


import { BrowserRouter as Router, Route, Link, Switch, withRouter } from 'react-router-dom';  
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import Music from './music/Music';
import Home from './home/Home';
import LockScreen from './lock/LockScreen';
import MusicMobile from './components-mobile/MusicMobile';
import HomeMobile from './components-mobile/HomeMobile';
import FilmsMobile from './components-mobile/films/FilmsMobile';

import NarrativeMobile from './components-mobile/narrative/NarrativeMobile';
//import JournalRouterMobile from './components-mobile/JournalRouterMobile';

import FilmsRouter from './films/FilmsRouter';
import Narrative from './narrative/Narrative';
//import JournalEntry from './journal/JournalEntry';
//import JournalRouter from './journal/JournalRouter';
//import Journal from './journal/Journal';
import db from './data/data.json';
require('typeface-questrial')



export default class App extends Component {

  render() {
    const home = db.home;
    const music = db.music;
    const narrative = db.narrative;
    const films = db.films;

    if(!isMobile) {
      return (
        <div>
          <Switch>
            <BrowserView>
              <Route path="/music" render={(props) => <Music {...props} dbdata={music}/>}/>
              <Route path="/films" render={(props) => <FilmsRouter {...props} dbdata={films}/>}/>
              <Route path="/narrative" render={(props) => <Narrative {...props} dbdata={narrative}/>}/>
              <Route
              exact path="/"
              render={(props) => {
                if (!sessionStorage.getItem('auth-token')) {
                    return <LockScreen/>
                } else {
                  const authToken = '123456abcdef';
                  if (sessionStorage.getItem('auth-token') == authToken) {
                      console.log('good token. Log in.')
                      return <Home {...props} dbdata={home}/>
                    } else {
                      console.log('bad token.')
                      return <LockScreen/>
                    }
                }
              }}
            />
              {/* <Route exact path="/" render={(props) => <Home {...props} dbdata={home}/>}/> */}
            </BrowserView>
          </Switch>
        </div>
      );
    } else {
      return (
        <div>
          <Switch>
            <MobileView>
              <Route path="/music" render={(props) => <MusicMobile {...props} dbdata={music}/>}/>
              <Route path="/films" render={(props) => <FilmsMobile {...props} dbdata={films}/>}/>
              <Route path="/narrative" render={(props) => <NarrativeMobile {...props} dbdata={narrative}/>}/>
              <Route exact path="/" render={(props) => <HomeMobile {...props} dbdata={home}/>}/>
            </MobileView>
          </Switch>
        </div>
      )
    }
    
  }
}