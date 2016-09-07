import React, { Component } from 'react';
import userImage from '../images/userImage.png';
import menuImage from '../images/menuImage.png';
import deltaBankImage from '../deltaBankImage.png';

class HeaderComponent extends Component{
    render(){
      return (
        <nav className="nav-bar navbar-default clearfix">
            <div className="container header-space">
              <a href="#" className="menu-image">
                <img src={menuImage}></img>
              </a>
              <a href="#">
                <img src={deltaBankImage}></img>
              </a>
              <div className="user-image l-right">
                <img src={userImage}></img>
              </div>
              <div className="l-right">
                  <div className="username">
                    Eugenia Rodriguez
                  </div>
                  <div className="last-connection">
                    Última conexión: lunes 29 de Noviembre a las 15:56.
                  </div>
              </div>
            </div>
        </nav>
      );
}
}

export default HeaderComponent;
