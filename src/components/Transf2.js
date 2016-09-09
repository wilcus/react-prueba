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
        <div className="external">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="paragraph2">
                TRANSFERENCIAS ENTRE CUENTAS PROPIAS
              </div>
              <div className="internal">
                <div className="App-header2">
                  <h5>PASO 2</h5>
                  <h4>INGRESE EL CODIGO TOKEN</h4>
                  <div className="center icons-box">
                    <IconsHeaderComponent color1="red" color2="blue" color3="gray"/>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="col-md-4">
                  </div>
                  <div className="col-md-4">
                    <div className="paragraph">
                      Genera un código mediante el dispositivo,
                      luego ingresalo en la casilla que se muestra más abajo:
                    </div>
                  </div>
                  <div className="col-md-4">
                  </div>
                </div>
                <br/><br/>
                <div className="center transference-form">
                  <form>
                    <div className="form-group">
                      <label for="cod" >CODIGO TOKEN:</label>
                      <input type="text" className="form-control" placeholder="ingresa el código" id="cod"/>
                      <br/>
                      <div className="buttons">
                        <Link to={'/transf1'}>
                          <button type="button" className="btn btn-default l-left">VOLVER</button>
                        </Link>
                        <Link to={'/transf3'}>
                          <button type="button" className="btn btn-primary l-right">SIGUIENTE</button>
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterComponent />
        </div>
      </div>

    );
  }
}
export default Transf2;
