import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LoginPass from './components/LoginPass'
import Transferencia3 from './components/Transferencia3'
import './index.css';

import { Router, Route, Link, browserHistory } from 'react-router'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
    <Route path="/login" component={LoginPass}>
    </Route>
    <Route path="/transferencia3" component={Transferencia3}>
    </Route>
  </Router>,
  document.getElementById('root')
);
