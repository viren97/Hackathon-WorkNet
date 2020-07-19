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
  DropdownItem

} from 'reactstrap';
import logo from './images/logo-removebg-preview.png';
import Profile from './Components/Profile/Profile';
export class Layout extends Component {
static displayName = Layout.name;
 
constructor(props) {
  super(props);
  this.state = {isOpen: false};
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
      <Navbar  light expand="md">
        <NavbarBrand style={{ width: "10%", marginRight : "0"}} href="/home"><img style={{ width: "88%"}} src={logo} alt="Logo"></img></NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/search">Search</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/enterprise">Enterprise</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/companyregistration">Company</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/viren97/Hackathon-WorkNet">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        { false  ? this.showUser() : this.showLoginRegister()}
      </Navbar>
    </div>
    </React.Fragment>
    );
  }
}