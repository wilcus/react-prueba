import React, { Component } from 'react';
import '../App.css';
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import IconsHeaderComponent from './IconsHeaderComponent'
import { Router, Route, Link, browserHistory } from 'react-router'

class Transf3 extends Component {
  render() {
    return (
      <div >
        <HeaderComponent />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="paragraph2">
                TRANSFERENCIAS ENTRE CUENTAS PROPIAS
              </div>
              <div className="App-header2">
                <h4>FIN</h4>
                <h3>TICKET</h3>
                <div className="center">
                    <IconsHeaderComponent />
                </div>
              </div>
              <br/>
              <div className="paragraph3">
                Este es el ticket de su transferencia
              </div>
              <div className="paragraph3" >
                La transferencia fue realizada con exito el día 10 de Setiembre del 2016 a las 09:23.
                La cuenta fue la 22345563-4 y la cuenta destino la 234566-67, se transfirieron USD 25 con una
                comisión de USD 1.75.
              </div>
            </div>
          </div>

        </div>
        <FooterComponent />
      </div>

    );
  }
}
export default Transf3;
