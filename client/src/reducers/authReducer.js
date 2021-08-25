import { FETCH_USER } from "../actions/types";

const authReducer = function (state = null, action) {// for now = {} becouse it need to be returned and i don't wan't it to be undifiend

    console.log(action);

    switch (action.type) {

        case FETCH_USER:
            return action.payload || false ; // the user model = true || false = the user loged out. the state by deafult return null becouse I can't know if the user is logged in till I recieve the response from the get req. to api/current_user

        default:
            return state;

     }
};
export default authReducer;
