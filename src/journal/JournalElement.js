import React, { Component, Text } from 'react';
import './JournalElement.css';
import { Link } from 'react-router-dom';  
import JournalHeaderText from './JouranlHeaderText';
require('typeface-questrial')


export default class JournalElement extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      
      <div 
      className="journalEl-journalContainer"
      style={{flexDirection: 'column', marginBottom: '12%',width: '69%'}}>
        <Link to={`${this.props.linkPrefix}/${this.props.id}`}>
        <img 
        style={{
                    maxWidth: '100%',
                    height: "auto", 
                    width: 'auto',
                }} 
                src={require('../images/' + this.props.imgSrc)} 
                alt="fuck"
                />
        <JournalHeaderText link={false} title={this.props.title} shotBy={this.props.shotBy}/>


          </Link>
      </div>
    );
  }
}
