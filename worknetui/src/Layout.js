import React, { Component } from 'react';
import logo from './images/logo.png';
import history from './history'
export class Layout extends Component {
static displayName = Layout.name;
handleClick = () => {
  history.push("/home");
}
  render () {
    return (
      <div className="col-sm-8 layout">
          <div className="col-xs-2 logo" onClick = {this.handleClick}>
              <img src={logo} alt="Logo"></img>
          </div>
          {this.props.children}
      </div>
    
    );
  }
}
