import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'

class NextButtonComponent extends Component {

	render() {
		var text = this.props.text || "SIGUIENTE";
		return (
			<Link to={this.props.link}>
		    <button type="button" className={this.props.class}>{text}</button>
		  </Link>
	  )
	}	
}

export default NextButtonComponent;