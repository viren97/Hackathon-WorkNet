import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Layout} from './Layout';
import {Route} from 'react-router';
import GuestRegistration from './Components/Registration/CompanyExecutiveSignup.js';
import './Components/Registration/RegistrationStylesheet.css';
import Profile from './Components/Profile/Profile';
import { Button } from 'reactstrap';

function App() {
  return (
      <div className="App">
        <Layout>   
          {/* <Route path='/login' component={LoginSignup} />   
          <Route path='/signup' component={LoginSignup} />  */}
        </Layout>
        <Route  path="/" component={ Profile }/>
        <Route  path="/guestregistration" component={ GuestRegistration }/>
        {/* <Route exact path="/login" render={props => <Login />} />
        <Route exact path="/signup" render={props => <Signup />} /> */}
    </div>
  );  
}

export default App;
