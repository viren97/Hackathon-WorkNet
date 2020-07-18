import './App.css';
import React from 'react';
import {Layout} from './Layout';
import {Route} from 'react-router-dom';
import GuestRegistration from './Components/Registration/CompanyExecutiveSignup.js';
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import './Components/Registration/RegistrationStylesheet.css';

function App() {
  return (
      <div className="App">
          <Layout/> 
          <Route exact path="/home" component={Home}/>
          <Route exact path="/register" component={GuestRegistration}/>
          <Route exact path="/login" component={Login}/> 
      </div>
  );
}

export default App; 
