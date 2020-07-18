import React, { Component } from 'react';
<<<<<<< HEAD
import {Container} from 'reactstrap';
import logo from './images/logo.png';
=======
import logo from './images/logo.jpg';
import {Col} from 'reactstrap';
>>>>>>> ed9bf11e1fceea3c7cd57323a0487eedfd761871
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
