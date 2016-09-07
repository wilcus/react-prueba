import React, { Component } from 'react';
import logoLogin from '../images/logodelta.svg';

import { Router, Route, Link, browserHistory } from 'react-router'


class LoginComponent extends Component{
    render(){
      return (
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
                            <input type="text" className="form-control" placeholder="NOMBRE DE USUARIO"/>
                          </div>
                          <Link to={'login'} ><button type="button" className="btn btn-primary button-bank">SIGUIENTE</button></Link>
                        </form>
                    </div>
              </div>
          </div>
      );
}
}

export default LoginComponent;
