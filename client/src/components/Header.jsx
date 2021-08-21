import React, { Component } from 'react';

class Header extends Component {
    state = {  }
    render() { 
        return ( 

            <nav>
            <div className="nav-wrapper">
              <a href="/" className="brand-logo">Survey Show</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="/">Login With Google</a></li>
              </ul>
            </div>
          </nav>
                
         );
    }
}
 
export default Header;