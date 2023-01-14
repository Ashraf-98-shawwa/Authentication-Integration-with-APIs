import axios from "axios";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Controls from "../Components/Controls";
import User from "../Components/User";
// import Content from "../Components/Content";

export default class Profile extends Component {
  state = {
    name: "",
    email: "",
    admin: "",
    isLoading: true,
  };

  async componentDidMount() {
    const token = localStorage.getItem("token");

    try {
      const res = await axios.get(
        "https://react-tt-api.onrender.com/api/users/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      this.setState({ name: res.data.name });
      this.setState({ email: res.data.email });
      this.setState({ admin: res.data.isAdmin ? "Yes" : "No" });
      this.setState({ isLoading: false });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <section className="HomePage">
        <Controls />
        <User />
        <NavLink
          style={{ position: "absolute", top: "20px", left: "150px" }}
          to="/Home"
        >
          Home
        </NavLink>

        <div
          style={{
            padding: "150px",
          }}
        >
          {this.state.isLoading ? (
            "Loading ..."
          ) : (
              <>
                <h3 style={{ marginBottom: "25px" }}>My Profile</h3>
              <p>Name :{this.state.name}</p>
              <p style={{ margin: "10px 0px" }}>Email :{this.state.email}</p>
              <p>Admin : {this.state.admin}</p>
            </>
          )}
        </div>
      </section>
    );
  }
}
