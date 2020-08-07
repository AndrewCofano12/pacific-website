import React, { Component } from "react";
import "./CreditsOverlay.css";


export default class CreditsOverlay extends Component {
    constructor(props) {
        super(props)
        this.state = {
          filmObject: this.props.filmObject
        }
      }
    

    render() {
        return (
            <div className="films-creditContent">
                <div className="films-creditName">{this.state.filmObject.name}</div>
                <div className="films-creditline">director: {this.state.filmObject.director}</div>
                <div className="films-creditline">{this.state.filmObject.releaseDate}</div>

            </div>
        )
    }
        

}