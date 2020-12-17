import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import Appp from './Appp'
import {createStore} from 'redux'
import reducer from './reducer';
import {Provider} from 'react-redux'

const store=createStore(reducer)

ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>
  
  ,
  document.getElementById('root')
);
