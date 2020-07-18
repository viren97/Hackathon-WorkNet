import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Layout} from './Layout';
import {Route} from 'react-router';
import GuestRegistration from './Components/Registration/CompanyExecutiveSignup.js';
import './Components/Registration/RegistrationStylesheet.css';


function App() {
  return (
    <div className="App">
      <Layout>   
        <Route exact path="/" component={GuestRegistration}/>
        {/* <Route path='/login' component={LoginSignup} />   
        <Route path='/signup' component={LoginSignup} />  */}
      
      {/* <Route exact path="/login" render={props => <Login />} /> 
      <Route exact path="/signup" render={props => <Signup />} /> */}  
      </Layout> 
  </div>
  ); 
}

export default App;
