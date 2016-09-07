import React, { Component } from 'react';
import { render } from 'react-dom'
import LoginComponent from './components/LoginComponent'
import Transf2 from './components/Transf2'
import Transf3 from './components/Transf3'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="vertical-horizontal-center">
        <LoginComponent/>
      </div>
    );
  }
}

export default App;
