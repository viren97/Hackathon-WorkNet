import './App.css';
import React from 'react';
import {Layout} from './Layout';
import {Route} from 'react-router-dom';
import GuestRegistration from './Components/Registration/CompanyExecutiveSignup.js';
import Home from './Components/Home/Home'
import './Components/Registration/RegistrationStylesheet.css';
import { Container } from 'reactstrap';

function App() {
  return (
      <div className="App">
        <Layout>   
          {/* <Route path='/login' component={LoginSignup} />   
          <Route path='/signup' component={LoginSignup} />  */}
        </Layout>
          <Route exact path="/" component={Home}/>
          <Route exact path="/register" component={GuestRegistration}/>
    </div>
  );
}

export default App;
