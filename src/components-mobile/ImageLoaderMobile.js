import React, { Component } from 'react';
import './ImageLoaderMobile.css';
export default class ImageLoaderMobile extends Component {
    constructor(props) {
        super(props)
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
    
    render() {
        return(
            <div style={{
                display: "flex",
                flexDirection: "column",
                overflowy: "scroll",
                overflowx: "none",
                height: this.state.height, 
                width: this.state.width,
   }}
                className="ImageLoader"
            >
                <img style={{
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    height: "auto", 
                    width: "100%"
                }} 
                src={require("../images/3.jpg")} alt="fuck"/>
                <img style={{
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    height: "auto", 
                    width: "100%"
                }} 
                src={require("../images/4.jpg")} alt="fuck"/>
                <img style={{
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    height: "auto", 
                    width: "100%"
                }} 
                src={require("../images/2.jpg")} alt="fuck"/>
                <img style={{
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    height: "auto", 
                    width: "100%"
                }} 
                src={require("../images/1.jpg")} alt="fuck"/>
            </div>
        )
    }
    
        
    
}