import React, { Component } from 'react';
import NavigationHeader from '../components/NavigationHeader';
import './MusicStyles.css';
import EpisodeSlider from './EpisodeSlider';
import $ from 'jquery';

export default class Music extends Component {
  constructor(props) {
    super(props);
    this.state = {
        musicObject: props.dbdata
    };
  }

  componentDidMount () {
    $('html, body').css('overflow', 'hidden');   
  }


  render() {
    console.log(this.state.musicObject)
    return (
      <div className="music-musicBackground" style={{backgroundColor: this.state.musicObject.episodes[0].backgroundColor}}>
        <NavigationHeader formatString="lightFormat" page="music"/>
        <EpisodeSlider episodes={this.state.musicObject.episodes}/>
        
      </div>
      );  }
}