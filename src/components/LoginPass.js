import React, { Component } from 'react';
import logoLogin from '../login.png';
import { Router, Route, Link, browserHistory } from 'react-router'


export default class LoginPass extends Component {

	handlePasswordChange(e) {
		console.log("handling password");
	}

	render() {
		return (
			<div className="container text-align-center" >
				<div className="row">
                  <div className="col-md-12">
                    <img src={logoLogin}></img>
                  </div>
         	 	</div>

         	 	<div className="row">
         	 		<div className="center">
				        
				        <p><input 
				        	type="password" 
				        	name="password" 
				        	className="form-control"
				        	value={this.props.password} 
				        	placeholder="CONTRASEÑA"
				        	onChange={this.handlePasswordChange}
				        	/>
				        </p>
				        
				        <Link to={'/transf1'}>
				        <button type="submit" className="btn btn-primary button-bank"> Siguiente</button>
				        </Link>

				    </div>
				</div>
		    </div>
		)
	}
}


// <p><input type="text" name="login" value="" placeholder="Username or Email"/></p>