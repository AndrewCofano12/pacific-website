import React, { Component } from 'react';
import $ from 'jquery';
import VideoPlayer from '../components/VideoPlayer';
import styled from "styled-components";
import Films from './Films'
import { Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";


export default class FilmsRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
        filmsObject: props.dbdata
    };
  }

  render() {

    const Wrapper = styled.div`
    .fade-enter {
        opacity: 0.01;
    }
    .fade-enter.fade-enter-active {
        opacity: 1;
        transition: opacity 300ms ease-in;
    }
    .fade-exit {
        opacity: 1;
    }
      
    .fade-exit.fade-exit-active {
        opacity: 0.01;
        transition: opacity 300ms ease-in;
    }
`;
    // console.log(this.state.filmsObject)
    return (
            <div>
              {/* <Wrapper>
                <TransitionGroup className="transition-group">
                  <CSSTransition
                  // key={location.key}
                  timeout={{ enter: 300, exit: 300 }}
                  classNames="fade"
                  > */}
                    <Route exact path={this.props.match.path} render={(props) => <Films {...props} entries={this.state.filmsObject.filmsEntries} loops={this.state.filmsObject.homeLoops} linkPrefix={this.props.match.path}/>} />
                    {this.state.filmsObject.filmsEntries.map((item,i) => {
                      console.log(item);
                      return (
                        <Route key={i} path={`${this.props.match.path}/${item.id}`} key={i} render={(props) => <VideoPlayer {...props} src={item.src} filmObject={item}/>}/>
                      )
                    })}
                  {/* </CSSTransition>
                </TransitionGroup>
                </Wrapper> */}
            </div>
    )}

    
}
