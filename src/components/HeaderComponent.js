import React, { Component } from 'react';
import userImage from '../images/userImage.png';
import menuImage from '../images/menuImage.png';
import deltaBankImage from '../images/deltaBankImage.png';
import MenuComponent from './MenuComponent';

const HeaderLogoImage = () => (
  <a href="#">
    <img src={deltaBankImage}></img>
  </a>
)

const HeaderUserImage = () => (
  <a href="#" className="user-image l-right">
    <img src={userImage}></img>
  </a>
)

class LastConnection extends Component{
  render() {
    let today = new Date();    
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    let text_lastconnection = today.toLocaleDateString('es-ES', options) ;
    
    return (
      <div className="last-connection">
        Ultima conexión: <br/> {text_lastconnection}
      </div>
    );
  }
}

const UserName = ({text}) => (
  <div className="username">
    {text}
  </div>
)

const HeaderUserInformation = () => (
  <div className="l-right">
    <UserName text="Eugenia Rodriguez" />
    <LastConnection /> 
  </div>
)

class HeaderComponent extends Component{
  render(){
    return (
      <nav className="nav-bar navbar-default clearfix">
        <div className="container header-space">
          <MenuComponent />
          <HeaderLogoImage />
          <HeaderUserImage />
          <HeaderUserInformation />
        </div>
      </nav>
    );
  }
}

export default HeaderComponent;
