import './App.css';
import React from 'react';
import {Layout} from './Layout';
import {Route} from 'react-router-dom';
import GuestRegistration from './Components/Registration/CompanyExecutiveSignup.js';
import CompanyRegistration from './Components/Registration/CompanyRegistration.js';
import './Components/Registration/RegistrationStylesheet.css';
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'

function App() {
  return (
      <div className="App">
          <Layout/> 
          <Route exact  path="/companyregistration" component={ CompanyRegistration }/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/register" component={GuestRegistration}/>
          <Route exact path="/login" component={Login}/> 
      </div>
  );
}

export default App; 
