import React, { Component } from 'react';
import logoLogin from '../images/logodelta.svg';
import FooterComponent from './FooterComponent';
import { Router, Route, Link, browserHistory } from 'react-router'

class MenuComponent extends Component{
  render(){
    return (
      <ul className='nav'>
        <li className="nav-section">
          <div className="nav-section--header">
            CONSULTAS
          </div>
          <hr/>
          <ul className="nav-section--links">
            <li><a href="#">Posición</a></li>
            <li><a href="#">Estado de Cuenta</a></li>
          </ul>
        </li>
        <hr/>
        <li className="nav-section">
          <div className="nav-section--header">
            TRANSFERENCIAS
          </div>
          <hr/>
          <ul className="nav-section--links">
            <li><a href="#">Entre cuentas</a></li>
            <li><a href="#">A terceros</a></li>
          </ul>
        </li>
        <hr/>
      </ul>
    );
  }
}

export default MenuComponent;
