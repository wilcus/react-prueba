import React, { Component } from 'react';
import logoLogin from '../images/logodelta.svg';
import FooterComponent from './FooterComponent';
import { Router, Route, Link, browserHistory } from 'react-router'
import menuImage from '../images/menuImage.png';

const ContentMenuComponent = () => (
  <ul className='nav'>
    <li className="nav-section">
      <div className="nav-section--header">
        CONSULTAS
      </div>
      <hr/>
      <ul className="nav-section--links">
        <li>Posición</li>
      </ul>
      <ul className="nav-section--links">
        <li>Estado de Cuenta</li>
      </ul>
    </li>
    <hr/>
    <li className="nav-section">
      <div className="nav-section--header">
        TRANSFERENCIAS
      </div>
      <hr/>
      <ul className="nav-section--links">
        <li>Entre cuentas</li>
      </ul>
      <ul className="nav-section--links">
        <li>A terceros</li>
      </ul>
    </li>
    <hr/>
  </ul>
)

class MenuComponent extends Component{
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      mobileNavVisible: false
    };
  }

  renderMenuBar() {
    if(this.state.mobileNavVisible) {
      return  <ContentMenuComponent />;
    }
  }

  handleMenuClick() {
    if(!this.state.mobileNavVisible) {
      this.setState({mobileNavVisible: true});
    } else {
      this.setState({mobileNavVisible: false});
    }
  }

  render(){
    return (
      <span>
        <a href="#" className="menu-image" onClick={() => this.handleMenuClick()}>
          <img src={menuImage}></img>
        </a>
        {this.renderMenuBar()}
      </span>
    )
  }
}

export default MenuComponent;
