import React, { Component } from 'react';
import logoLogin from '../images/logodelta.svg';
import userImage from '../images/dog.svg';
import FooterComponent from './FooterComponent'
import { Router, Route, Link, browserHistory } from 'react-router'
import LoginLogoComponent from './loginComponents/LoginLogoComponent'
import NextButtonComponent from './NextButtonComponent'

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
                  <div className="form-group login-border clearfix">
                    <i className="fa fa-lock l-left fa-2x" aria-hidden="true"></i>
                    <input
                      type="password" name="password" className="input-username l-right"
                      value={this.props.password} placeholder="CONTRASEÑA"
                      onChange={this.handlePasswordChange}
                    />
                  </div>
                  <NextButtonComponent link="transf1" class="button-bank" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <FooterComponent />
        </div>
      </div>
    )
  }
}

