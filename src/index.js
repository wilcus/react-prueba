import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LoginPass from './components/LoginPass'
import './index.css';

import { Router, Route, Link, browserHistory } from 'react-router'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
    <Route path="/login" component={LoginPass}>
    </Route>
  </Router>,
  document.getElementById('root')
);
