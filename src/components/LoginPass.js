import React, { Component } from 'react';

export default class LoginPass extends Component {


	handlePasswordChange(e) {
		console.log("gg");
	}

	render() {
		return (
			<div class="login">
		      <h1>Write your password</h1>
		      <form method="post" action="index.html">
		        
		        <p><input 
		        	type="password" 
		        	name="password" 
		        	value={this.props.password} 
		        	placeholder="Password"
		        	onChange={this.handlePasswordChange}/>
		        </p>

		        <p class="remember_me">
		          <label>
		            <input type="checkbox" name="remember_me" id="remember_me"/>
		            Remember me on this computer 123
		          </label>
		        </p>
		        
		        <button type="submit" className="btn btn-primary"> Get Started</button>


		      </form>
		    </div>
		)
	}
}


// <p><input type="text" name="login" value="" placeholder="Username or Email"/></p>