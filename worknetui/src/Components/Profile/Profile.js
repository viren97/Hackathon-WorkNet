import React, { Component } from 'react';
import { DropdownToggle, ButtonDropdown, DropdownMenu, DropdownItem, Col } from 'reactstrap';
import { logout } from '../../Redux/Services/AuthenticationServices';
import history from './../../history'
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen : false
        }
    }
    toggle = () => this.setState({dropdownOpen : !this.state.dropdownOpen});
    redirect = (loc ) => {history.push(loc)}
    logout= () =>{}
    render() {
        console.log('e');
    return (
       
        <Col xs="4" className="profile-container">
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle>
                <p>"this.props.user.name"</p>
                <img className="profile-image" src="https://www.searchpng.com/wp-content/uploads/2019/02/Men-Profile-Image-1024x941.png" alt="Profile"/>
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem onClick = {() =>this.redirect('/profile')}>
                    <p>Profile</p>
                </DropdownItem>
                <DropdownItem onClick = {() =>this.redirect('/rides')}>Rides</DropdownItem>
                <DropdownItem onClick = {() => logout()}> Logout</DropdownItem>
            </DropdownMenu>
            </ButtonDropdown>
        </Col>
    );
    }
}
// const mapStateToProps = state =>{
//     return{
//         user : state.profile.user
//     }
//   }
  
//   const mapDispatchToProps = dispatch =>{
//      return{
//          logout: ()=> dispatch(logout())
//      };
//   }

export default Profile;