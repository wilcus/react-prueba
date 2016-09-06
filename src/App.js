import React, { Component } from 'react';
import { render } from 'react-dom'
import LoginComponent from './components/LoginComponent'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Prueba en react</h2>
          <LoginComponent/>
        </div>
      </div>
    );
  }
}

export default App;
