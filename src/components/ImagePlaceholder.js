import React, { Component } from 'react';
import './ImagePlaceholder.css';


export default class ImagePlaceholder extends Component {
    constructor(props) {
        super(props)
      }
    

    render() {
        return (
            <div className={`${this.props.grid ? 'placeholder-container-grid' : 'placeholder-container'} ${this.props.narrative ? ' placeholder-narrative' : ''}`}>
            </div>
        )
    }
        

}