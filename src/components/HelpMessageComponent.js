import React, { Component } from 'react';

export default class FooterComponent extends Component{
  render(){
    return (
      <div className="container">
      	<p>{this.props.helpText}</p>
      </div> 
    );
  }
}
