import { combineReducers } from "redux";
import {AuthenticationReducer} from './Reducers/AuthenticationReducer'
export const rootReducer = combineReducers({

    authenticate: AuthenticationReducer
})
