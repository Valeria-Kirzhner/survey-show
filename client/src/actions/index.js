import axios from 'axios';
import { FETCH_USER } from './types'; 

//action creator - his purpouse is to return an action and then the dispatch sent it to different reducers inside the store. It produces a new value for state and updetes the state inside of the store. And then the store updates all the components .
const fetchUser = () => {

    return function(dispatch){

         axios.get('api/current_user')
         .then( res => dispatch({ type: FETCH_USER, payload: res  }))

    }
     
};