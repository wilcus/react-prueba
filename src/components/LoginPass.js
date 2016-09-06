import React, { Component } from 'react';
import logoLogin from '../login.png';


export default class LoginPass extends Component {

	handlePasswordChange(e) {
		console.log("handling password");
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="center"> 
                  <div className="col-md-12">
                    <img src={logoLogin}></img>
                  </div>
                  </div>
         	 	</div>

         	 	<div className="row">
         	 		<div className="center">
				      <form method="post" action="index.html">
				        
				        <p><input 
				        	type="password" 
				        	name="password" 
				        	className="form-control"
				        	value={this.props.password} 
				        	placeholder="CONTRASEÑA"
				        	onChange={this.handlePasswordChange}
				        	/>
				        </p>

				        
				        
				        <button type="submit" className="btn btn-primary button-bank"> Siguiente</button>


				      </form>
				    </div>
				</div>
		    </div>
		)
	}
}


// <p><input type="text" name="login" value="" placeholder="Username or Email"/></p>