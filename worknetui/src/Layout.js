import React, { Component } from 'react';
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
  NavbarText
} from 'reactstrap';
import logo from './images/logo.jpg';
import Profile from './Components/Profile/Profile';
import history from './history';
import { Col } from 'reactstrap';
export class Layout extends Component {
static displayName = Layout.name;

constructor(props) {
  super(props);
  this.state = {isOpen: false};
}

handleClick = () => {
history.push("/home");
}


  toggle = () => this.setState({
    isOpen : ! this.state.isOpen
  })
  showUser = () => {
      return (<Profile/>);
  }
  render () {
  

    return (
      // <div className="layout Col-8"> 
      //     <div className="logo Col-2" onClick = {this.handleClick}>
      //         <img src={logo} alt="Logo"></img>
      //     </div>
      //     {this.props.children}
      // </div>

    <React.Fragment>
      {/* <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li style={{ width: "10%"}}>
          <img style={{ width: "88%"}} src={logo} alt="Logo"></img>
        </li>
        <li className="nav-item" role="presentation">
          <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="/home" role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
        </li>
        <li className="nav-item" role="presentation">
          <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="/profile" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</a>
        </li>
        <li className="nav-item" role="presentation">
          <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="/contact" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</a>
        </li>
        </ul>
      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">...</div>
        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
      </div> */}
      <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand style={{ width: "10%", marginRight : "0"}} href="/"><img style={{ width: "88%"}} src={logo} alt="Logo"></img></NavbarBrand>
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
        { true  ? this.showUser() : null}
      </Navbar>
    </div>
    </React.Fragment>
    );
  }
}
