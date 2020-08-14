import React, { Component } from 'react';
import './ImageLoaderMobile.css';
import LazyLoad from 'react-lazyload';

export default class ImageLoaderMobile extends Component {
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
                flexDirection: "column",
                overflowy: "scroll",
                overflowx: "none"}}
                className="ImageLoaderMobile"
            >
                {this.state.images.map((item,i) => {
                    if (i == 0) {
                        return (
                            // <LazyLoad key={i} once>
                            <img className="imageLoaderMobile-backgroundPhoto"
                            style={{
                                top: 0,
                                bottom: 0,
                                right: 0,
                                left: 0,
                                height: "101vh",
                                objectFit: "cover",
                                width: "100%"
            
                            }} 
                            src={`http://www.pacificfilm.co/wp-content/images/home-mobile/${item.url}`} alt="fuck"/>
                            // </LazyLoad>
                        )
                    }
                    else {
                        return (
                            // <LazyLoad key={i} once>
                            <img className="imageLoaderMobile-backgroundPhoto"
                            style={{
                                top: 0,
                                bottom: 0,
                                right: 0,
                                left: 0,
                                height: (item.sizing == "full" ? "auto" : "102vh"),
                                objectFit: "cover",
                                width: "100%"
            
                            }} 
                            src={`http://www.pacificfilm.co/wp-content/images/home-mobile/${item.url}`} alt="fuck"/>

                            // </LazyLoad>
                        )
    
                    }
                })}
            </div>
        )
    }
    
        
    
}