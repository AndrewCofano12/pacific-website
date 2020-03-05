import React from 'react';
import './NavigationHeader.css'
import { Link} from 'react-router-dom';  

export default function NavigationHeader() {
  return (
  <div className="navigationWrapper textFormat">
    <div className="navigationHeaderContainer">
      <div className="siteLogoContainer">
        <div className="siteLogo">
          <Link to="/" className={'siteLogo'}>
              pacific
          </Link>
        </div>
        <div className="navContainer">
          <span className="pageNav musicNav">
            <Link to="/music" className={'pageNav'}>
              music
            </Link>
          </span>
          <span className="navSeparator">
                /
          </span>
          <span className="pageNav journalNav pageSelected">
            <Link to="/journal" className={'pageNav'}>
              journal
            </Link>
          </span>
          <span className="navSeparator">
                /
          </span>
          <span className="pageNav filmsNav">
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

