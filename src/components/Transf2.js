import React, { Component } from 'react';
import '../App.css';
import HeaderComponent from './HeaderComponent' 
import { Router, Route, Link, browserHistory } from 'react-router'

class Transf2 extends Component {
  render() {
    return (
      <div >
        <HeaderComponent />
      <div className="container">
      <div className="row">
        <div className="App-header2">
          <h4>PASO 2</h4>
          <h3>INGRESE EL CODIGO TOKEN</h3>
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
              <div className="form-group">
                <Link to={'/transf1'}>
                  <button type="button" className="btn btn-default l-left">VOLVER</button>
                </Link>
                <Link to={'/transf3'}>
                <button type="button" className="btn btn-primary l-right">SIGUIENTE</button>
                </Link>
              </div>
            </form>
        </div>
      </div>
      </div>

      </div>

    );
  }
}
export default Transf2;
