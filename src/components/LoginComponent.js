import React, { Component } from 'react';
import logoLogin from '../images/logodelta.svg';
import FooterComponent from './FooterComponent'
import { Router, Route, Link, browserHistory } from 'react-router'
import LoginLogoComponent from './loginComponents/LoginLogoComponent'
import NextButtonComponent from './NextButtonComponent'

const HelpText = ({text, aditional_text}) => (
  <div className="center-block" >
    {text}
    <span className="security-info">
      {aditional_text}
    </span>
  </div>
);


class LoginComponent extends Component{
  render(){
    return (
      <div>
        <div className="vertical-horizontal-center">
          <div className="container">
            <div className="row">
              <LoginLogoComponent />
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="login-username center">
                  <form>
                    <div className="form-group login-border clearfix">
                      <i className="fa fa-user l-left fa-2x" aria-hidden="true">
                      </i>
                      <input type="text" className="input-username l-right" placeholder="NOMBRE DE USUARIO"/>
                    </div>
                    <NextButtonComponent link="/login" class="button-bank" />
                  </form>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <HelpText text="Le invitamos a ingresar a nuestra página web para mantenerse actualizado en todo lo referente a las medidas de seguridad básicas, que debe tomaren cuenta para mantener su "
                          aditional_text="información segura"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <FooterComponent />
        </div>
      </div>
    );
  }
}

export default LoginComponent;
