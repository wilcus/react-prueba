import React, { Component } from 'react';

export default class IconsHeaderComponent extends Component{
  render(){
    return (
       	<div className="text-align-center positionIcons">
            <i className="fa fa-file-text fa-lg l-center icon-header" aria-hidden="true"></i>
            <i className="fa fa-unlock-alt fa-lg l-center icon-header" aria-hidden="true"></i>
            <i className="fa fa-check fa-lg l-center icon-header" aria-hidden="true"></i>
        </div>
    );
  }
}
