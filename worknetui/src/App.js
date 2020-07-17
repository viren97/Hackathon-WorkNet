import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Layout} from './Layout';
import {Route} from 'react-router';

function App() {
  return (
    <div className="App">
      <Layout>   
        {/* <Route path='/login' component={LoginSignup} />   
        <Route path='/signup' component={LoginSignup} />  */}
      </Layout>
      {/* <Route exact path="/login" render={props => <Login />} />
      <Route exact path="/signup" render={props => <Signup />} /> */}
  </div>
  );
}

export default App;
