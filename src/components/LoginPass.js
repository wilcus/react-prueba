import React, { Component } from 'react';
import logoLogin from '../images/logodelta.svg';
import userImage from '../images/dog.svg';
import FooterComponent from './FooterComponent'
import { Router, Route, Link, browserHistory } from 'react-router'
import LoginLogoComponent from './loginComponents/LoginLogoComponent'

export default class LoginPass extends Component {

  handlePasswordChange(e) {
    console.log("handling password");
  }

  render() {
    return (
      <div>
        <div className="vertical-horizontal-center">
          <div className="container" >
            <div className="row">
              <LoginLogoComponent />
            </div>
            <div className="row">
              <div className="login-password center">
                <img src={userImage} className="l-left" alt=""/>
                <form className="l-right">
                  <div className="form-group">
                    <i className="fa fa-user icon l-left" aria-hidden="true"></i>
                    <input
                      type="password" name="password" className="form-control input-username"
                      value={this.props.password} placeholder="CONTRASEÑA"
                      onChange={this.handlePasswordChange}
                    />
                  </div>
                  <Link to={'/transf1'}>
                    <button type="submit" className="btn btn-primary button-bank">Siguiente</button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
        <FooterComponent />
      </div>
    )
  }
}

