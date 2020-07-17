import {userAutenticationSuccess, userLogout} from '../Actions/AuthenticationAction';
import {userAutenticationFailure} from '../Actions/AuthenticationAction';
import { ApiConnection } from '../../Services/APIConnection'
import { GlobalStore } from '../GlobalStore';
var api = new ApiConnection();
export const authenticateUser =(username , password ) => {
    return function(dispatch){
        const data = {
            Email : username,
            Password : password,
          }
        api.postWithoutAuth("urls.Login", data)
        .then(res => {
        console.log(res);
        if(!res.status)
        {
          if (res.token) {
            window.localStorage.setItem("authToken", res.token);
            authenticateUserFromToken();
          }
        }
        else if(res.status !== 200)
        {
            var notAuthenticatedAction = userAutenticationFailure("loginPageConstants.LoginError");
            GlobalStore.dispatch(notAuthenticatedAction);
        }
        });
    }
}
export const logout = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("user");
  var action = userLogout();
  GlobalStore.dispatch(action);
}
export const authenticateUserFromToken =() => {
  if (localStorage.authToken) {
    var authenticatedAction = userAutenticationSuccess()
    GlobalStore.dispatch(authenticatedAction);
  } 
}

