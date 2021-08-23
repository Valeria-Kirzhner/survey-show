import axios from 'axios';
import { FETCH_USER } from './types'; 

//action creator - his purpouse is to return an action and then the dispatch sent it to different reducers inside the store. It produces a new value for state and updetes the state inside of the store. And then the store updates all the components .
export const fetchUser = () => async dispatch => {// arrow func inside arrow func 

   const res = await axios.get('api/current_user');
   
    dispatch({ type: FETCH_USER, payload: res  });

};
     
