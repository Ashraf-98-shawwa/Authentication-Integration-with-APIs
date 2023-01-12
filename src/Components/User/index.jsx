import React, { Component } from "react";
import "./style.css";
import user from "../../Images/user.png";
export default class User extends Component {
  state = {
    username: "",
  };
  componentDidMount() {
    const username = localStorage.getItem("name");
    this.setState({ username });
  }
  render() {
    return (
      <div className="user">
        <h2>
          Welcome back,<span style={{ textTransform:"capitalize" }}>{this.state.username}</span>
        </h2>
        <img src={user} alt="user-pic" />
      </div>
    );
  }
}
