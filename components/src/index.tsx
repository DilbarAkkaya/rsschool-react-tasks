import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Context from './Context/Context';

ReactDOM.render(
  <HashRouter>
 <App />
  </HashRouter>
  ,
  document.getElementById('root')
);

reportWebVitals();
