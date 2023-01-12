import React, { Component } from "react";
import PasswordStrength from "../PasswordStrength";

export default class Input extends Component {
  render() {
    if (this.props.passwordMessage) {
      return (
        <div className="input-box">
          <label htmlFor={this.props.id}>{this.props.label}</label>
          <input
            id={this.props.id}
            type={this.props.type}
            placeholder={this.props.placeholder}
            value={this.props.value}
            onChange={this.props.Change}
          />
          <PasswordStrength strength={this.props.strength} />
        </div>
      );
    } else
      return (
        <div className="input-box">
          <label htmlFor={this.props.id}>{this.props.label}</label>
          <input
            id={this.props.id}
            type={this.props.type}
            placeholder={this.props.placeholder}
            value={this.props.value}
            onChange={this.props.Change}
          />
        </div>
      );
  }
}
