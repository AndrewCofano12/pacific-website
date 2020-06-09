import React, { Component } from 'react';
import './imageLoader.css';
export default class ImageLoader extends Component {
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
            /** */
            <div style={{
                display: "flex",
                flexDirection: "row",
                overflow: "scroll",
                height: this.state.height, 
                minwidth: this.state.width,
                maxWidth: "100%"}}
                className="ImageLoader"
            >

                <img className="backgroundPhoto"
                style={{
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    height: "auto",
                    objectFit: "cover",
                    width: "100vw"

                }} 
                src={require("../images/homepage/01.jpg")} alt="fuck"/>
                <img className="backgroundPhoto"
                style={{
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    height: "auto", 
                    objectFit: "cover",
                    width: "100vw"
                }} 
                src={require("../images/homepage/02.jpg")} alt="fuck"/>
                <img className="backgroundPhoto" 
                style={{
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    height: "auto",
                    objectFit: "cover",
                    width: "100vw"
                }} 
                src={require("../images/homepage/03.jpg")} alt="fuck"/>
                <img className="backgroundPhoto"
                style={{
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    height: "auto", 
                    objectFit: "cover",
                    width: "50vw"
                }} 
                src={require("../images/homepage/04.jpg")} alt="fuck"/>
                <img className="backgroundPhoto"
                style={{
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    height: "auto", 
                    objectFit: "cover",
                    width: "50vw"
                }} 
                src={require("../images/homepage/05.jpg")} alt="fuck"/>
                <img className="backgroundPhoto"
                style={{
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    height: "auto",
                    objectFit: "cover",
                    width: "50vw"
                }} 
                src={require("../images/homepage/06.jpg")} alt="fuck"/>
                <img className="backgroundPhoto"
                style={{
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    height: "auto",
                    objectFit: "cover",
                    width: "50vw"
                }} 
                src={require("../images/homepage/07.jpg")} alt="fuck"/>
                <img className="backgroundPhoto"
                style={{
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    height: "auto", 
                    objectFit: "cover",
                    width: "100vw"
                }} 
                src={require("../images/homepage/08.jpg")} alt="fuck"/>
                <img className="backgroundPhoto"
                style={{
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    height: "auto", 
                    objectFit: "cover",
                    width: "100vw"
                }} 
                src={require("../images/homepage/09.jpg")} alt="fuck"/>
                <img className="backgroundPhoto"
                style={{
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    height: "auto", 
                    objectFit: "cover",
                    width: "100vw"
                }} 
                src={require("../images/homepage/010.jpg")} alt="fuck"/>

                <img className="backgroundPhoto"
                style={{
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    height: "auto", 
                    objectFit: "cover",
                    width: "100vw"
                }} 
                src={require("../images/homepage/011.jpg")} alt="fuck"/>
                <img className="backgroundPhoto"
                style={{
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    height: "auto", 
                    objectFit: "cover",
                    width: "100vw"
                }} 
                src={require("../images/homepage/012.jpg")} alt="fuck"/>
                <img className="backgroundPhoto"
                style={{
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    height: "auto", 
                    objectFit: "cover",
                    width: "100vw"
                }} 
                src={require("../images/homepage/013.jpg")} alt="fuck"/>
            </div>
        )
    }
    
        
    
}