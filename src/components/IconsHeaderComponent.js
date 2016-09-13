import React, { Component } from 'react';

var borderStyle = (color)=>{
  return {"color": color, "border": '3px solid' + color};
}

var lineBetweenIconsStyle = (color)=>{
  return {"color": color, "position": "relative", "top": "-16px"};
}

const IconHeaderComponent = ({icon, color}) => (
  <i className={"fa icon-header icon " + icon} style={ borderStyle(color) } aria-hidden="true"></i>
)

const LineBetweenIcons = ({color}) => (
  <span style={ lineBetweenIconsStyle(color) }>__</span>
)


export default class IconsHeaderComponent extends Component{
  render(){
    return (
      <div className="text-align-center positionIcons">
        <IconHeaderComponent icon="fa-file-text" color={this.props.color1}/>
        <LineBetweenIcons color={this.props.color1}/>
        <IconHeaderComponent icon="fa-unlock-alt" color={this.props.color2}/>
        <LineBetweenIcons color={this.props.color2}/>
        <IconHeaderComponent icon="fa-check" color={this.props.color3}/>
      </div>
    );
  }
}
