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
            <Link to="/narrative" className={` ${props.page == "narrative" ? "pageNavSelected" : "pageNav"} ${props.formatString}`}>
              narrative
            </Link>
          </span>
          <span className={`navSeparator ${props.formatString}`}>
                /
          </span>
          <span className={`pageNavContainer filmsNav`}>
            <Link to="/visual" className={` ${props.page == "visual" ? "pageNavSelected" : "pageNav"} ${props.formatString}`}>
              visual
            </Link>
          </span>                
        </div>
      </div>
    </div> 
    </div>
  )
}

