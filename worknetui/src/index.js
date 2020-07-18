import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import history from './history';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { GlobalStore } from './Redux/GlobalStore';
import App  from './App';

ReactDOM.render(
  <Provider store={GlobalStore}> 
    <BrowserRouter >
    <React.StrictMode>
      <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
