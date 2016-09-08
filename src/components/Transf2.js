import React, { Component } from 'react';
import '../App.css';
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import IconsHeaderComponent from './IconsHeaderComponent'
import { Router, Route, Link, browserHistory } from 'react-router'

class Transf2 extends Component {
  render() {
    return (
      <div >
        <HeaderComponent />
      
        <div className="container">
          <div className="row">
            <div className="paragraph2">
              TRANSFERENCIAS ENTRE CUENTAS PROPIAS
            </div>
            <div className="App-header2">
              <h4>PASO 2</h4>
              <h3>INGRESE EL CODIGO TOKEN</h3>
                <div className="center">
                  <IconsHeaderComponent />
                </div>
            </div>
            <div className="paragraph">
              Genera un código mediante el dispositivo,
              luego ingresalo en la casilla que se muestra más abajo:
            </div>
            <div className="center">
              <form>
                <div className="form-group">
                  <label for="cod" >CODIGO TOKEN:</label>
                  <input type="text" className="form-control" placeholder="ingresa el código" id="cod"/>
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

        <FooterComponent />
      </div>

    );
  }
}
export default Transf2;
