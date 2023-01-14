import axios from "axios";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import swal from "sweetalert";
import { API_URL } from "../API";
import Controls from "../Components/Controls";
import User from "../Components/User";

export default class UsersList extends Component {
  state = {
    users: [],
    isLoading: true,
  };
  token = localStorage.getItem("token");
  async componentDidMount() {
    try {
      const res = await axios.get(
        "https://react-tt-api.onrender.com/api/users",
        {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        }
      );

      this.setState({ users: res.data });
      this.setState({ isLoading: false });
    } catch (error) {
      console.log(error);
    }
  }

  deleteUser = async (id) => {
    try {
      const res = await axios.delete(`${API_URL}/users/${id}`, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });
      swal({
        title: "Success!",
        text: `${res.data.message}  Successfully !!`,
        icon: "success",
        timer: 1500,
        button: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <section className="HomePage">
        <Controls />

        <User />
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "150px",
          }}
        >
          <h3>Users List :</h3>
          {this.state.isLoading
            ? "Loading .. "
            : this.state.users.map((item, index) => (
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "65%",
                    border: "1px solid black",
                    padding: "5px",
                  }}
                  key={item._id}
                >
                  <NavLink to={`${item._id}`}>
                    <p>
                      {index + 1} :{item.email}{" "}
                    </p>
                  </NavLink>
                  <button
                    style={{
                      backgroundColor: "wheat",
                      padding: "7px",
                      color: "red",
                      cursor: "pointer",
                    }}
                    onClick={() => this.deleteUser(item._id)}
                  >
                    delete
                  </button>
                </li>
              ))}
        </ul>
      </section>
    );
  }
}
