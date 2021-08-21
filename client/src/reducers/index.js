import { combineReducers } from "redux";
import authReducer from "./authReducer";

export default combineReducers({// whatever keys we provide to this object are going to represent the keys that exist inside of our state

    auth: authReducer
});