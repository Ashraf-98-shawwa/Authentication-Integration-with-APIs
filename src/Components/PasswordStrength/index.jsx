import React, { Component } from "react";
import "./style.css";

export default class PasswordStrength extends Component {
  render() {
    if (this.props.strength === "1" || this.props.strength === "2") {
      return (
        <>
          <div className="password-strength short"></div>
          <p style={{ color: "red" }} className="password-check-text">
            Password is too short ..
          </p>
        </>
      );
    }
   
    if (this.props.strength === "3") {
      return (
        <>
          <div className="password-strength not-bad"></div>
          <p style={{ color: "#ffc107" }} className="password-check-text">
            Not bad but you know you can do it better
          </p>
        </>
      );
    }
    if (this.props.strength === "4") {
      return (
        <>
          <div className="password-strength good"></div>
          <p style={{ color: "#ff922d" }} className="password-check-text">
            Good password
          </p>
        </>
      );
    }
    if (this.props.strength === "5") {
      return (
        <>
          <div className="password-strength strong"></div>
          <p style={{ color: "green" }} className="password-check-text">
            Strong password
          </p>
        </>
      );
    }
  }
}
