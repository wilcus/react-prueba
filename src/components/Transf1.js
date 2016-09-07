import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
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
        <div className="container">
          <div className="row">
            <div className="center">
              <div className="form-group">
                <label htmlFor="cuentaCredito">CUENTA DÉBITO</label>
                <input type="text" className="form-control" id="cuentaCredito"
                  placeholder="Selecciona una cuenta"
                  onChange={this.handleTextAccountDebito}
                />
              </div>
              <div className="form-group">
                <label htmlFor="cuentaDebito">CUENTA CRÉDITO</label>
                <input type="text" className="form-control" id="cuentaDebito"
                  placeholder="Selecciona una cuenta"
                  onChange={this.handleTextAccountCredito}
                />
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
        <FooterComponent />
      </div>
    )
  }

}
