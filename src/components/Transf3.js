import React, { Component } from 'react';
import '../App.css';

class Transf3 extends Component {
  render() {
    return (
      <div className="row">
        <div className="App-header2">
          <h3>FIN</h3>
          <h2>TICKET</h2>
        </div>
        <br/>
        <label for="parraf" className="App-textBoxHeader">Este es el ticket de su transferencia</label>
        <div className="App-parraf" id="parraf">
        La transferencia fue realizada con exito el día 10 de Setiembre del 2016 a las 09:23.
        La cuenta fue la 22345563-4 y la cuenta destino la 234566-67, se transfirieron USD 25 con una
        comisión de USD 1.75.
        </div>
   
      </div>

    );
  }
}
export default Transf3;
