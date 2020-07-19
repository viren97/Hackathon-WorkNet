import * as actions from '../ActionTypes/AuthenticationActionType';

export const AuthenticationInitialState  = {
    error:'',
    isAuthenticated: false,
}
export const userAutenticationSuccess = ()  =>({
    type: actions.USER_AUTHENTICATED,
    payload:{},
});

export const userAutenticationFailure = (data ) =>({
    type: actions.USER_NOT_AUTHENTICATED,
    payload:data
});
export const userLogout = ()  =>({
    type: actions.USER_LOGOUT,
    payload: {}
});
