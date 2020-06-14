import React, { Component } from 'react';
import JournalElementMobile from './JournalElementMobile'
import NavigationHeader from '../components/NavigationHeader';
import LazyLoad from 'react-lazyload';

export default class JournalMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        entries: props.entries
    };
  }


  render() {
    return (
      <div>
        <NavigationHeader page="journal"/>
        <div 
        style={{
          display: 'flex',
          paddingTop: '40%',
          flexDirection: 'column',
          alignItems: 'center'
          
        }}
        className="JournalMobile">
          {this.state.entries.map((item,i) => {
            return (
              <LazyLoad height="400" key={i} once>
                <JournalElementMobile imgSrc={item.coverImageSrc} title={item.title} shotBy={item.shotBy} id={item.id} linkPrefix={this.props.linkPrefix}/>
              </LazyLoad>
            )
          })}
        </div>
      </div>
    );
  }
}
