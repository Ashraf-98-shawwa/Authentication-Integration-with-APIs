import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <nav
        style={{
          position: "absolute",
          left: 150,
          top: 10,
          marginTop: "10px",
          zIndex: "10",
        }}
      >
        <button
          onClick={this.props.logout}
          style={{
            fontSize: "24px",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
        <NavLink
          style={{
            fontSize: "24px",
            padding: "10px",
            color: "black",
          }}
          to="/Home"
        >
          Home
        </NavLink>
        <NavLink
          style={{
            fontSize: "24px",
            padding: "10px",
            color: "black",
          }}
          to="/Home/profile"
        >
          Profile
        </NavLink>

        {this.props.admin ? (
          <NavLink
            style={{
              fontSize: "24px",
              padding: "10px",
              color: "black",
            }}
            to="/Home/userslist"
          >
            Users List
          </NavLink>
        ) : (
          ""
        )}
      </nav>
    );
  }
}
