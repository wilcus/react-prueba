import React, { Component } from 'react';
import '../App.css';

class Transf2 extends Component {
  render() {
    return (
      <div className="row">
        <div className="App-header2">
          <h3>PASO 2</h3>
          <h2>INGRESE EL CODIGO TOKEN</h2>
        </div>
        <br/>
        <div className="App-parraf">
          Genera un código mediante el dispositivo,
          luego ingresalo en la casilla que se muestra más abajo:
        </div>
        <div className="center">
            <form>
              <div className="form-group">
                <label for="cod" className="App-textBoxHeader">CODIGO TOKEN:</label>
                <input type="text" className="form-control" placeholder="CODIGO" id="cod"/>
              </div>
              <button type="button" className="btn btn-default">VOLVER</button>
              <button type="button" className="btn btn-primary">SIGUIENTE</button>
            </form>
        </div>
      </div>

    );
  }
}
export default Transf2;
