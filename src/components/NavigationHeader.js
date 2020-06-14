import React from 'react';
import './NavigationHeader.css'
import { Link } from 'react-router-dom';  

export default function NavigationHeader(props) {
  return (
  <div className="navigationWrapper textFormat">
    <div className="navigationHeaderContainer">
      <div className="siteLogoContainer">
        <div className={`siteLogo`}>
          <Link to="/" className={`siteLogo ${props.formatString}`}>
              pacific
          </Link>
        </div>
        <div className={`navContainer`}>
          <span className={`pageNavContainer musicNav`} >
            <Link to="/music" className={` ${props.page == "music" ? "pageNavSelected" : "pageNav"} ${props.formatString}`}>
              music
            </Link>
          </span>
          <span className={`navSeparator ${props.formatString}`}>
                /
          </span>
          <span className={`pageNavContainer journalNav`}>
            <Link to="/journal/" className={` ${props.page == "journal" ? "pageNavSelected" : "pageNav"} ${props.formatString}`}>
              journal
            </Link>
          </span>
          <span className={`navSeparator ${props.formatString}`}>
                /
          </span>
          <span className={`pageNavContainer filmsNav`}>
            <Link to="/films" className={` ${props.page == "films" ? "pageNavSelected" : "pageNav"} ${props.formatString}`}>
              films
            </Link>
          </span>                
        </div>
      </div>
    </div> 
    </div>
  )
}

