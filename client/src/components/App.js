import React, { Component } from "react";
import { BrowserRouter, Route} from 'react-router-dom'; 
import { connect } from "react-redux";// it's a tool to connect between the hook - on did mount and redux store.
import * as actions from '../actions';

import Header from '../components/Header';
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;


class App extends Component{

    componentDidMount () {
        this.props.fetchUser();// fetchUser = action creator 
    }

    render () {

    return(

        <div>
            < BrowserRouter>
                <div className="container">
                    < Header />
                    < Route exact path="/" component={ Landing } /> 
                    < Route  exact path="/surveys"  component={ Dashboard } /> 
                    < Route  path="/surveys/new"  component={ SurveyNew } /> 

                </div>
            </BrowserRouter>
        </div>

     );  
   };
};
// coonect is a tool to connect between the hook - on did mount and redux store.
export default connect(null, actions )(App);// The first argument of connect, is reserved for the map state to prop's arguments which i woudn't use. And the second arg is * imported actions.
