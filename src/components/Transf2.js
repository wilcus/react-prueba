import React, { Component } from 'react';
import '../App.css';
import HeaderComponent from './HeaderComponent' 
import { Router, Route, Link, browserHistory } from 'react-router'

class Transf2 extends Component {
  render() {
    return (
      <div >
        <HeaderComponent />
      <div class="container">
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
              <Link to={'/transf3'}>
                <button type="button" className="btn btn-primary">SIGUIENTE</button>
              </Link>
            </form>
        </div>
      </div>
      </div>

      </div>

    );
  }
}
export default Transf2;
