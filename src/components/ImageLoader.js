import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import './imageLoader.css';

export default class ImageLoader extends Component {
    constructor(props) {
        super(props)
        this.state = { width: 0, height: 0, images: props.images};
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
                flexDirection: "row",
                overflow: "scroll",
                height: this.state.height, 
                minwidth: this.state.width,
                maxWidth: "100%"}}
                className="ImageLoader"
            >
                {this.state.images.map((item,i) => {
                    if (i == 0) {
                        return (
                            <LazyLoad offset={100} once={true} key={i} overflow>
                                <img className="imageLoader-backgroundPhoto"
                                style={{
                                    top: 0,
                                    bottom: 0,
                                    right: 0,
                                    left: 0,
                                    height: "auto",
                                    objectFit: "cover",
                                    width: "101vw"
                
                                }} 
                                src={require('../images/homepage/' + item.url)} alt="fuck"/>
                            </LazyLoad>
                        )
                    }
                    else {
                        return (
                            <LazyLoad offset={100} once={true} key={i} overflow>
                            <img className="imageLoader-backgroundPhoto"
                            style={{
                                top: 0,
                                bottom: 0,
                                right: 0,
                                left: 0,
                                height: "auto",
                                objectFit: "cover",
                                width: (item.sizing == "full" ? "102vw" : "52vw")
            
                            }} 
                            src={require('../images/homepage/' + item.url)} alt="fuck"/>
                            </LazyLoad>

                        )
    
                    }
                })}
            </div>
        )
    }
    
        
    
}