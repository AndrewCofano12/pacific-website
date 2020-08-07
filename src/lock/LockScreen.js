import React, { Component } from "react";
import "./LockScreen.css";


export default class LockScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
      }
    

    render() {
        return (
            <div>
            <div class="wrapper">


            <div class="trademarked">
                <img id="logo" src="squiggles-v2.svg" alt="squiggles"/>
            </div>
            </div>

            <div class="info">evolution coming soon.</div>
            </div>

        )
    }
        

}