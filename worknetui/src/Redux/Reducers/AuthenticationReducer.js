import * as actions from '../ActionTypes/AuthenticationActionType';
import { AuthenticationInitialState } from '../Actions/AuthenticationAction';

export const AuthenticationReducer = (state=AuthenticationInitialState, action) =>{
    // console.log(action)
    switch(action.type){
        case actions.USER_AUTHENTICATED:
            return{
                error :'',
                isAuthenticated : true
            }
        case actions.USER_NOT_AUTHENTICATED:
            return{
                error : action.payload,
                isAuthenticated : false
            }
        case actions.USER_LOGOUT:
        return{
            error : '',
            isAuthenticated : false
        }
        default:
            return state
    }
}