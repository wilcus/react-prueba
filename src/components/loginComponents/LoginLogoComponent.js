import React, { Component } from 'react';
import logoLogin from '../../images/logodelta.svg';

const LoginLogoComponent = ({text, aditional_text}) => (
  <div className="col-md-12">
    <img src={logoLogin}></img>
  </div>
);

export default LoginLogoComponent;
