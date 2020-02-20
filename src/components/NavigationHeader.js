import React, { Component } from 'react';
import './NavigationHeader.css'

export default class NavigationHeader extends Component {

  render() {
    return (
      <div className="navigationWrapper textFormat">
        <div className="navigationHeaderContainer">
          <div className="siteLogoContainer">
            <div className="siteLogo">
              pacific
            </div>
            <div className="navContainer">
                <span className="pageNav musicNav">
                    music
                </span>
                <span className="navSeparator">
                    /
                </span>
                <span className="pageNav journalNav pageSelected">
                    journal
                </span>
                <span className="navSeparator">
                    /
                </span>
                <span className="pageNav filmsNav">
                    films
                </span>                
            </div>
          </div>
        </div> 
      </div>
    );
  }
}
