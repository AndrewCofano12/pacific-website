import React, { Component } from 'react';
import $ from 'jquery';
import VideoPlayer from '../components/VideoPlayer'
import Films from './Films'
import { Route } from 'react-router-dom';

export default class FilmsRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
        filmsObject: props.dbdata
    };
  }

  render() {
    console.log(this.state.filmsObject)
    return (
            <div>
                <Route exact path={this.props.match.path} render={(props) => <Films {...props} entries={this.state.filmsObject.filmsEntries} linkPrefix={this.props.match.path}/>} />
                {this.state.filmsObject.filmsEntries.map((item,i) => {
                  return (
                    <Route path={`${this.props.match.path}/${item.id}`} key={i} render={(props) => <VideoPlayer {...props} src={item.src}/>}/>
                  )
                })}
            </div>
    )}
}
