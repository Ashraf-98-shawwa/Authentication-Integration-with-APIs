import axios from "axios";
import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../API";
import Controls from "../Components/Controls";
import User from "../Components/User";

export default function UserDetails() {
  const { id } = useParams();

  return <Details id={id} />;
}

class Details extends Component {
  state = {
    id: "",
    email: "",
    name: "",
    admin: "",
    isLoading: true,
  };
  async componentDidMount() {
    const token = localStorage.getItem("token");

    try {
      const res = await axios.get(`${API_URL}/users/${this.props.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      this.setState({ name: res.data.name });
      this.setState({ email: res.data.email });
      this.setState({ id: res.data._id });
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

        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "150px",
          }}
        >
          <h3>User Details for {this.state.name}:</h3>

          {this.state.isLoading ? (
            "Loading ..."
          ) : (
            <li
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <p>ID :{this.state.id}</p>
              <p>Name :{this.state.name}</p>
              <p>Email :{this.state.email}</p>
              <p>Admin :{this.state.admin}</p>
            </li>
          )}
        </ul>
      </section>
    );
  }
}
