import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Layout} from './Layout';
<<<<<<< HEAD
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
=======
import {Route} from 'react-router-dom';
import Profile from './Components/Profile/Profile';
import { Button } from 'reactstrap';

function App() {
  return (
      <div className="App">
        {/* <Layout>    */}
          {/* <Route path='/login' component={LoginSignup} />   
          <Route path='/signup' component={LoginSignup} />  */}
        {/* </Layout> */}
        <Route  path="/" component={ Profile }/>
        {/* <Route exact path="/login" render={props => <Login />} />
        <Route exact path="/signup" render={props => <Signup />} /> */}
    </div>
  );
>>>>>>> ed9bf11e1fceea3c7cd57323a0487eedfd761871
}

export default App;
