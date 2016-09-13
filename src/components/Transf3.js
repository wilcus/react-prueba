import React, { Component } from 'react';
import '../App.css';
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import IconsHeaderComponent from './IconsHeaderComponent'

class Transf3 extends Component {
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
                  <h5>FIN</h5>
                  <h4>TICKET</h4>
                  <div className="center icons-box">
                      <IconsHeaderComponent color1="#ca003f" color2="#ca003f" color3="#ca003f"/>
                  </div>
                </div>
                <br/>

                <div className="row">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-2">
                      </div>
                      <div className="col-md-8">
                        <div className="paragraph">
                          La transferencia fue realizada con exito el día 10 de Setiembre del 2016 a las 09:23.
                          La cuenta fue la 22345563-4 y la cuenta destino la 234566-67, se transfirieron USD 25 con una
                          comisión de USD 1.75.
                        </div>
                      </div>
                      <div className="col-md-2">
                      </div>
                    </div>
                  </div>
                </div>

                <div className="paragraph3">
                  Este es el ticket de su transferencia
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
export default Transf3;
