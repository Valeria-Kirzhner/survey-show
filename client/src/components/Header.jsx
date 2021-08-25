import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    state = {  }
    render() { 
      console.log(this.props);
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

// object that returned to the Header component as props
function mapStateToProps ({ auth }){

  return { auth }; // reducers/index.js

}

export default connect( mapStateToProps )( Header );// connection between redux state and rect 