import React,{Component} from 'react';
import { connect } from 'react-redux';
import { store } from '../../Redux/GlobalStore';
import {onChangeFirstName,onChangeLastName, onChangeEmail, onChangeMobile, onChangeGender, onChangePasswordStrength} from './Validations'

class companyRegistration extends Component{
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
        if([event.target.name]=='companyName'){
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
            <div id="companySignup">
            <div id="company-signup-page-right">
                <div id="login-heading">
                    <h2>Company Registration</h2>
                </div> 
                
                    <form id="signupForm">
                        <div>
                        <div id="CompanyBasicDetails">
                    <div id="nameDiv" className="signupForm-elements">
                            <input type="text" 
                            id="companyName"
                            name="companyName"
                                    onChange={this.handleOnChange}
                                    required/>
                            <label>Enter Company Name</label><br/>
                        </div>
                        <div id="nameDiv" className="signupForm-elements">
                            <input type="text" 
                            id="companyWebsite"
                            name="companyWebsite"
                                    onChange={this.handleOnChange}
                                    required/>
                            <label>Enter Company Website</label><br/>
                        </div>
                        <div id="mobileDiv" className="signupForm-elements">
                            <input type="text"
                            id="companyDescription"
                            name="companyDescription"
                                    onChange={this.handleOnChange}
                                        required/>
                            <label>Enter Description</label><br/>
                        </div>

                        <div id="emailDiv" className="signupForm-elements">
                            <input type="text" 
                            id="companySector"
                            name="companySector"
                                    onChange={this.handleOnChange}
                                    required/>
                            <label>Enter Sector</label><br/>
                        </div>
                        <div id="passwordDiv" className="signupForm-elements">
                        <input type="password" 
                            id="companyEmployeeCount"
                            name="companyEmployeeCount"
                                onChange={this.handleOnChange}
                                required />
                            <label>Enter Employee count</label><br/>
                            <i onClick={this.handlePasswordDisplay} id="password-eye" class="fas fa fa-eye"></i>
                        </div>
                        <div id="confirmPasswordDiv" className="signupForm-elements">
                        <input type="password" 
                            id="companyEstablished"
                            name="companyEstablished"
                            onChange={this.handleOnChange}
                                required/>
                        <label>Company Established</label><br/>
                        </div>
                        </div>
                    <div id="companyAddress">
                        <div id="emailDiv" className="signupForm-elements">
                            <input type="text" 
                            id="addressLine"
                            name="addressLine"
                                    onChange={this.handleOnChange}
                                    required/>
                            <label>Line </label><br/>
                        </div>
                        
                        <div id="emailDiv" className="signupForm-elements">
                            <input type="text" 
                            id="addressCity"
                            name="addressCity"
                                    onChange={this.handleOnChange}
                                    required/>
                            <label>City</label><br/>
                        </div>
                        <div id="emailDiv" className="signupForm-elements">
                            <input type="text" 
                            id="addressState"
                            name="addressState"
                                    onChange={this.handleOnChange}
                                    required/>
                            <label>State</label><br/>
                        </div>
                        <div id="emailDiv" className="signupForm-elements">
                            <input type="text" 
                            id="addressCountry"
                            name="addressCountry"
                                    onChange={this.handleOnChange}
                                    required/>
                            <label>Country</label><br/>
                        </div>
                        <div id="emailDiv" className="signupForm-elements">
                            <input type="text" 
                            id="addressLandline"
                            name="addressLandline"
                                    onChange={this.handleOnChange}
                                    required/>
                            <label>Landline</label><br/>
                        </div>
                        <div id="emailDiv" className="signupForm-elements">
                            <input type="text" 
                            id="addressZipcode"
                            name="addressZipcode"
                                    onChange={this.handleOnChange}
                                    required/>
                            <label>Zip code</label><br/>
                        </div>
                        </div>
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

export default connect(null,mapDispatchToProps)(companyRegistration);