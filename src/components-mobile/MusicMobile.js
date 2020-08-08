import React, { Component } from 'react';
import NavigationHeader from '../components/NavigationHeader';
import './MusicMobile.css';
import LazyLoad from 'react-lazyload';
import ScrollingColorBackground from 'react-scrolling-color-background';


export default class MusicMobile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            musicObject: props.dbdata
        };
      }

    render() {

    return (
        <div>
        <NavigationHeader formatString="lightFormat" page="music"/>
        <ScrollingColorBackground
        selector='.js-color-stop[data-background-color]'
        colorDataAttribute='data-background-color'
        initialRgb='rgb(0, 0, 0)'/>
        <div className="musicMobile-episodeSectionContainer">
            {this.state.musicObject.timeline.map((episode,i) => {
                return (
                    <section
                    data-background-color={episode.backgroundColor}
                    className='js-color-stop musicMobile-episodeSection'
                    id={`musicMobile-${episode.name}Container`}>
                        <LazyLoad height={500} key={i} once>
                        <div className="musicMobile-episodeContainer">
                            <div className="musicMobile-artworkWrapper">
                                <img draggable="false" className="musicMobile-coverImage musicMobile-noselect" src={"http://www.pacificfilm.co/wp-content/images/music/" + episode.frontArtwork} alt="fuck"/>
                            </div>
                            <div className="musicMobile-linkContainer">
                                <div className="musicMobile-release">{episode.release}</div>
                                <a className="musicMobile-episodeLink" href={episode.link}>listen on soundcloud</a>

                            </div>
                        </div>
                        </LazyLoad>

                    </section>
                )
            })}

        </div>
        </div>

        );  }
    }
