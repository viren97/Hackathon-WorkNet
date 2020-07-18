import React,{Component} from 'react';
import { connect } from 'react-redux';
import { store } from '../../Redux/GlobalStore';
import {onChangeFirstName,onChangeLastName, onChangeEmail, onChangeMobile, onChangeGender, onChangePasswordStrength, onSubmitValidation} from './Validations'

class Signup extends Component{
    constructor(props) {
        super(props);
    }
    
    handlePasswordDisplay = () =>{
        var inputElement = document.getElementById("password");
        if (inputElement.type === "password") {
            inputElement.type = "text";
        } else {
            inputElement.type = "password";
        }
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const name = this.state.name;
        const gender = this.state.gender; 
        const mobileno = this.state.mobile;
        const email = this.state.email;
        const password = this.state.password;
        const confirmPassword = this.state.confirmPassword;
        if(password==confirmPassword && password !=''){
        const user={
            name,
            gender,
            mobileno,
            email,
            password
        }
        this.props.onCreate(user);
        this.handleRedirectToLogin();
        console.log(user);
        }
        else if(password != confirmPassword){
            document.getElementById("confirmPassword").style.border="2px solid red"
            document.getElementById('passwordMatch').style.display="block";
        }
        else if(name==' '|| mobileno==''||gender==''||email==''||password==''){
            document.getElementById('formatMatch').style.display="block";
        }
        }

    handleOnChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
        if([event.target.name]=='firstName'){
            this.props.onChangeFirstName();
        }
        else if([event.target.name]=='lastName'){
            this.props.onChangeLastName();
        } 
        else if([event.target.name]=='email'){
            this.props.onChangeEmail();
        }
        else if([event.target.name]=='gender'){
            this.props.onChangeGender();
        }
        else if([event.target.name]=='mobile'){
            this.props.onChangeMobile();
        }
        else if([event.target.name]=='password'){
            this.props.onChangePassword();
        }
        else if([event.target.name]=='confirmPassword'){
            this.props.onChangePassword();
        }
    }

    handleRedirectToLogin = (e) => {
        
        //this.props.onToggle(true);
    }

    render(){
        return(
            <div id="signup">
            <div id="signup-page-right">
                <div id="login-heading">
                <h2>Executive Sign Up</h2>
                </div> 
                
                    <form id="signupForm">
                    <div id="nameDiv" className="signupForm-elements">
                            <input type="text" 
                            id="firstName"
                            name="firstName"
                                    onChange={this.handleOnChange}
                                    required/>
                            <label>Enter Name</label><br/>
                        </div>
                        <div id="nameDiv" className="signupForm-elements">
                            <input type="text" 
                            id="lastName"
                            name="lastName"
                                    onChange={this.handleOnChange}
                                    required/>
                            <label>Enter Name</label><br/>
                        </div>
                        <div id="mobileDiv" className="signupForm-elements">
                            <input type="text"
                            id="mobile"
                            name="mobile"
                                    onChange={this.handleOnChange}
                                        required/>
                            <label>Enter Mobile Number</label><br/>
                        </div>
                        <div id="emailDiv" className="signupForm-elements">
                            <input type="text" 
                            id="email"
                            name="email"
                                    onChange={this.handleOnChange}
                                    required/>
                            <label>Enter Email Id</label><br/>
                        </div>
                        <div id="passwordDiv" className="signupForm-elements">
                        <input type="password" 
                            id="password"
                            name="password"
                                onChange={this.handleOnChange}
                                required />
                            <label>Enter Password</label><br/>
                            <i onClick={this.handlePasswordDisplay} id="password-eye" class="fas fa fa-eye"></i>
                        </div>
                        <div id="confirmPasswordDiv" className="signupForm-elements">
                        <input type="password" 
                            id="confirmPassword"
                            name="confirmPassword"
                            onChange={this.handleOnChange}
                                required/>
                        <label>Confirm Password</label><br/>
                        </div>
                        <div>
                        <button onClick={this.handleSubmit} type="submit">Submit</button>
                        </div><span id="passwordMatch">Password does not match</span>
                        <span id="formatMatch">Please Enter inputs in proper format</span>
                    </form>
                    <div id="alternative">
                        <p>Already a member?&nbsp;&nbsp;</p>
                        
                            <h4 onClick={this.handleRedirectToLogin}><span id="log-text">LOG&nbsp;</span>IN</h4>
                    
                    </div>
                </div>
                </div>
            
        )
    }
}

 const mapDispatchToProps = (dispatch) =>{
     return{
        //  onToggle: (data)=> dispatch(toggleSignupLogin(data)),
        // onCreate: (data)=> dispatch(CreateUser(data)),
        onChangeFirstName : ()=>dispatch(onChangeFirstName()),
        onChangeLastName : ()=>dispatch(onChangeLastName()),
        onChangeEmail : ()=> dispatch(onChangeEmail()),
        onChangeMobile : () =>dispatch(onChangeMobile()),
        onChangeGender : ()=>dispatch(onChangeGender()),
        onChangePassword : ()=> dispatch(onChangePasswordStrength()),
     };
 }

export default connect(null,mapDispatchToProps)(Signup);