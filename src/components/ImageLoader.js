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
                            // <LazyLoad key={i} overflow once>
                                <img className="imageLoader-backgroundPhoto imageLoader-full"
                                style={{
                                    top: 0,
                                    bottom: 0,
                                    right: 0,
                                    left: 0,
                                    height: "100%",
                                    objectFit: "cover",
                                    width: "101vw"
                
                                }} 
                                src={`http://www.pacificfilm.co/wp-content/images/home/${item.url}`} alt="fuck"/>
                                // src={`http://narc:deepinbopz@pacificfilm.co/wp-content/images/home/${item.url}`} alt="fuck"/>

                                // </LazyLoad>
                            )
                    }
                    else {
                        return (
                            // <LazyLoad key={i} overflow once>
                            <img className={`imageLoader-backgroundPhoto ${item.sizing == "full" ? "imageLoader-full" : "imageLoader-half"} `}
                            style={{
                                top: 0,
                                bottom: 0,
                                right: 0,
                                left: 0,
                                height: "100%",
                                objectFit: "cover",
                                width: (item.sizing == "full" ? "102vw" : "52vw")
            
                            }} 
                            src={`http://www.pacificfilm.co/wp-content/images/home/${item.url}`} alt="fuck"/>
                            // src={`http://narc:deepinbopz@pacificfilm.co/wp-content/images/home/${item.url}`} alt="fuck"/>

                            // </LazyLoad>

                        )
    
                    }
                })}
            </div>
        )
    }
    
        
    
}