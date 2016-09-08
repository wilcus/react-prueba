import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import IconsHeaderComponent from './IconsHeaderComponent'
import { Router, Route, Link, browserHistory } from 'react-router'

export default class Transf1 extends Component {

  handleTextImporte() {

  }

  handleTextReference() {

  }

  handleTextAccountDebito() {

  }

  handleTextAccountCredito() {

  }

  render() {
    return (
      <div>
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
                  <h5>PASO 1</h5>
                  <h4>INGRESE LOS DATOS DE LA TRANSFERENCIA</h4>
                    <div className="center">
                      <IconsHeaderComponent />
                    </div>
                </div>
                <div className="center">
                  <div className="form-group Transf-info">
                    <label htmlFor="cuentaCredito">CUENTA DÉBITO</label>
                    <select className="form-control">
                      <option>Selecciona una cuenta</option>
                      <option>Cuenta 1</option>
                      <option>Cuenta 2</option>
                      <option>Cuenta 3</option>
                      <option>Cuenta 4</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="cuentaDebito">CUENTA CRÉDITO</label>
                    <select className="form-control">
                      <option>Selecciona una cuenta</option>
                      <option>Cuenta 1</option>
                      <option>Cuenta 2</option>
                      <option>Cuenta 3</option>
                      <option>Cuenta 4</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="importe">IMPORTE </label>
                    <input type="text" className="form-control" id="importe"
                      placeholder="Ingresa el importe"
                      onChange={this.handleTextImporte}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="referencia">REFERENCIA</label>
                    <input type="text" className="form-control" id="referencia"
                      placeholder="Ingresa una referencia"
                      onChange={this.handleTextReference}
                    />
                  </div>
                  <Link to={'/transf2'}>
                    <button type="submit" className="btn btn-primary button-bank"> Siguiente</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterComponent />
        </div>
      </div>
    )
  }

}
