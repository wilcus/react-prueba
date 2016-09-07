import React, { Component } from 'react';
import logoLogin from '../images/logodelta.svg';
import FooterComponent from './FooterComponent'
import { Router, Route, Link, browserHistory } from 'react-router'

class LoginComponent extends Component{
  render(){
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <img src={logoLogin}></img>
            </div>
          </div>
          <div className="row">
            <div className="center">
              <form>
                <div className="form-group">
                  <i className="fa fa-user icon l-left" aria-hidden="true">
                  </i>
                  <input type="text" className="form-control input-username l-right" placeholder="NOMBRE DE USUARIO"/>
                </div>
                <Link to={'login'} ><button type="button" className="btn btn-primary button-bank">SIGUIENTE</button></Link>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="center-block">
              Le invitamos a ingresar a nuestra página web para mantenerse actualizado en
              todo lo referente a las medidas de seguridad básicas, que debe tomar
              en cuenta para mantener su <span className="security-info">información segura</span>.
            </div>
          </div>
        </div>
        <FooterComponent />
      </div>
    );
  }
}

export default LoginComponent;
