import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Purchase from './Components/Purchase';
import './index.css';


import { Router, Route, browserHistory } from 'react-router'




ReactDOM.render(
  <Router history={browserHistory}>
  <Route path="/" component={App} />
  <Route path="/purchase" component={Purchase}/>
  </Router>,
  document.getElementById('root')
);
