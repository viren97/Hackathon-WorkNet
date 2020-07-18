import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from 'reactstrap';
import logo from './images/logo.jpg';
import Profile from './Components/Profile/Profile';
import history from './history';
export class Layout extends Component {
static displayName = Layout.name;

constructor(props) {
  super(props);
  this.state = {isOpen: false};
}
redirect = (url) => {

}

  toggle = () => this.setState({
    isOpen : ! this.state.isOpen
  })
  showUser = () => {
      return (<Profile/>);
  }
  showLoginRegister = () => {
    return(
    <React.Fragment>
      <Link className = "login-register" to= "register"> Register </Link>
      <Link className = "login-register" to= "login"> Login </Link>
    </React.Fragment>
    )
  }
  render () {
    return (
    <React.Fragment>
      <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand style={{ width: "10%", marginRight : "0"}} href="/home"><img style={{ width: "88%"}} src={logo} alt="Logo"></img></NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/about">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
        { true  ? this.showUser() : this.showLoginRegister()}
      </Navbar>
    </div>
    </React.Fragment>
    );
  }
}
