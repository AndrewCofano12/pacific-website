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

import MusicMobile from './components-mobile/MusicMobile';
import HomeMobile from './components-mobile/HomeMobile';
import JournalRouterMobile from './components-mobile/JournalRouterMobile';
import FilmsRouter from './films/FilmsRouter'
import JournalEntry from './journal/JournalEntry';
import JournalRouter from './journal/JournalRouter';
import Journal from './journal/Journal';
import db from './data/data.json';
require('typeface-questrial')



export default class App extends Component {


  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  } 


  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
    }



    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    callBackendAPI = async () => {
    const response = await fetch(`${config.API_URI}/`);
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };


  render() {
    const home = db.home;
    const music = db.music;
    const journal = db.journal;
    const films = db.films;

    if(!isMobile) {
      return (
        <div>
          <p className="App-intro">Hello {this.state.data}</p>
          <Switch>
            <BrowserView>
              <Route path="/music" render={(props) => <Music {...props} dbdata={music}/>}/>
              <Route path="/films" render={(props) => <FilmsRouter {...props} dbdata={films}/>}/>
              <Route path="/journal" render={(props) => <JournalRouter {...props} dbdata={journal}/>}/>
              <Route exact path="/" render={(props) => <Home {...props} dbdata={home}/>}/>
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
              {/* <Route path="/films" render={(props) => <FilmsMobile {...props} dbdata={films}/>}/> */}
              <Route path="/journal" render={(props) => <JournalRouterMobile {...props} dbdata={journal}/>}/>
              <Route exact path="/" render={(props) => <HomeMobile {...props} dbdata={home}/>}/>
            </MobileView>
          </Switch>
        </div>
      )
    }
    
  }
}