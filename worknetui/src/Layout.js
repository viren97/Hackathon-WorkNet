import React, { Component } from 'react';
import {Container} from 'reactstrap';
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
        <Container>
          {this.props.children}
          </Container> 
      </div>
    
    );
  }
}
