import React, { Component } from "react";
import "./style.css"

export default class Overlay extends Component {
  render() {
    return <div className="overlay">{this.props.children}</div>;
  }
}
