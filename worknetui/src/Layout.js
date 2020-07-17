import React, { Component } from 'react';
import logo from './images/logo.jpg';
import {Col} from 'reactstrap';
import history from './history'
export class Layout extends Component {
static displayName = Layout.name;
handleClick = () => {
  history.push("/home");
}
  render () {
    return (
      <Col className="layout" xs = "8"> 
          <Col xs = "2" className="logo" onClick = {this.handleClick}>
              <img src={logo} alt="Logo"></img>
          </Col>
          {this.props.children}
      </Col>
    );
  }
}
