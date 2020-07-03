import React, { Component } from "react";
import "./CreditsOverlay.css";


export default class CreditsOverlay extends Component {
    render() {
        if(this.props.looped) {
            return (
                <div>
                    <text
                    style={{color: 'white'}}
                    >Hello</text>
                </div>
            )
        }
        
    }
}