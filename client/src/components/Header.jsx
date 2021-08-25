import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    state = {  }

    renderContent(){
      switch (this.props.auth){

        case null:
          return null;
        case false:
          return <li> <a href="/auth/google ">Login With Google</a></li>;
        default:
          return <li><a href="/">Logout</a></li>;

      }
    }

    render() { 

      return ( 

          <nav>
            <div className="nav-wrapper">
              <a href="/" className="brand-logo">Survey Show</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {this.renderContent()}      
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