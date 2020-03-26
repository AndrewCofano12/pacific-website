import React from 'react';
import './NavigationHeader.css'
import { Link } from 'react-router-dom';  

export default function NavigationHeader(props) {
  return (
  <div className="navigationWrapper textFormat">
    <div className="navigationHeaderContainer">
      <div className="siteLogoContainer">
        <div className={`siteLogo ${props.formatString}`}>
          <Link to="/" className={'siteLogo'}>
              pacific
          </Link>
        </div>
        <div className={`navContainer ${props.formatString}`}>
          <span className={`pageNav musicNav ${props.page === "music" ? "pageSelected" : ""} ${props.formatString}`} >
            <Link to="/music" className={'pageNav'}>
              music
            </Link>
          </span>
          <span className="navSeparator">
                /
          </span>
          <span className={`pageNav journalNav ${props.page === "journal" ? "pageSelected" : ""} ${props.formatString}`}>
            <Link to="/journal" className={'pageNav'}>
              journal
            </Link>
          </span>
          <span className="navSeparator">
                /
          </span>
          <span className={`pageNav filmsNav ${props.page === "films" ? "pageSelected" : ""} ${props.formatString}`}>
            <Link to="/films" className={'pageNav'}>
              films
            </Link>
          </span>                
        </div>
      </div>
    </div> 
    </div>
  )
}

