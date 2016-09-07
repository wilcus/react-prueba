import React, { Component } from 'react';
import '../App.css';
import HeaderComponent from './HeaderComponent'

import { Router, Route, Link, browserHistory } from 'react-router' 

class Transf3 extends Component {
  render() {
    return (
      <div >
      <HeaderComponent />
      <div className="container">
      <div className="row">
        <div className="App-header2">
          <h4>FIN</h4>
          <h3>TICKET</h3>
        </div>
        <br/>
        <div className="App-parraf">
         Este es el ticket de su transferencia
        comisión de USD 1.75.
        </div>
        <br/>
        <div className="App-parraf" id="parraf">
            Este es el ticket de su transferencia
            La cuenta fue la 22345563-4 y la cuenta destino la 234566-67, se transfirieron USD 25 con una
        comisión de USD 1.75.
        </div>
      </div>
      </div>
      </div>

    );
  }
}
export default Transf3;
