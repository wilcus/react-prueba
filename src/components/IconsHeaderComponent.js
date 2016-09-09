import React, { Component } from 'react';

const IconHeaderComponent = ({icon, color}) => (  
  <i className={"fa icon-header " + icon} style={{"color":color}} aria-hidden="true"></i>
)

export default class IconsHeaderComponent extends Component{
  render(){
    return (
      <div className="text-align-center positionIcons">
        <IconHeaderComponent icon="fa-file-text" color={this.props.color1}/>
        <IconHeaderComponent icon="fa-unlock-alt" color={this.props.color2}/>
        <IconHeaderComponent icon="fa-check" color={this.props.color3}/>
      </div>
    );
  }
}
