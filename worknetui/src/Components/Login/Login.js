import React, { Component } from 'react';
import { Card } from 'reactstrap';
class Login extends Component {
    render() {
      return (
        <Card className="login-container">
          <h1>LOGIN</h1>
          <div className="input-container">
            <input  className="username" type="text" placeholder="Username"/>
          </div>
          
          <div className="input-container">
            <input  className="password" type="password" placeholder="Password"/>
          </div>
          
          <button className ="submit" type="submit">Log In</button>
          <h6>Don't have an account?</h6>
          <button className = "signup">Sign Up!</button>
        </Card>
      )
    }
  }
  
export default Login