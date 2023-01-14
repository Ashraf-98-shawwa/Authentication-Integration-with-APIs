import React, { Component } from "react";
import LeftSide from "../Components/LeftSide";
import googleicon from "../Images/google-icon.png";
import github from "../Images/github.png";
import linkedin from "../Images/linkedin.png";
import twitter from "../Images/twitter.png";
import eye from "../Images/eye.png";
import * as yup from "yup";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../API";

const regularExpression =
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

export default class SignIn extends Component {
  state = {
    email: "",
    password: "",
    passwordtype: "password",
    Isloading: false,
  };

  schema = yup.object().shape({
    password: yup
      .string()
      // .min(8, "Password should be more than 8 characters")
      // .matches(
      //   regularExpression,
      //   "Password should be strong (numbers,capital and small letters ,sympol"
      // )
      .required(),

    email: yup.string().email().required(),
  });

  handleChangeInput = (e) => {
    const { value, id } = e.target;
    this.setState({ [id]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ Isloading: true });
    this.schema
      .validate(
        {
          email: this.state.email,
          password: this.state.password,
        },
        { abortEarly: true }
      )
      .then(async () => {
        const res = await axios.post(
          `${API_URL}/users/login`,
          {
            email: this.state.email,
            password: this.state.password,
          }
        );
        if (res) {
          this.setState({ Isloading: false });

          localStorage.setItem("token", res.data.token);
          localStorage.setItem("name", res.data.name);
          localStorage.setItem("admin", res.data.isAdmin ? "true" : "false");
          if (res.data.isAdmin) this.props.admin();
          this.props.login();
        }

        swal({
          title: "Success!",
          text: "logged In",
          icon: "success",
          timer: 2000,
          button: false,
        });
      })
      .catch((e) => {
        console.log(e.message || e.errors);
        swal({
          title: "Error!",
          text: `${e.message || e.errors}`,
          icon: "error",
          button: false,
        });
      });
  };

  showpassword = () => {
    this.setState((prevState) => ({
      passwordtype: prevState.passwordtype === "text" ? "password" : "text",
    }));
  };

  render() {
    return (
      <div className="The-Page">
        <LeftSide page="sign-in" />
        <div className="right-side-signin">
          <div className="form-box">
            <h1>Join the game!</h1>
            <p>Go inside the best gamers social network! </p>
            <ul>
              <li>
                <a href="https">
                  <img src={googleicon} alt="googleicon" />
                </a>
              </li>

              <li>
                <a href="https">
                  <img src={twitter} alt="twitter" />
                </a>
              </li>
              <li>
                <a href="https">
                  <img src={linkedin} alt="linkedin" />
                </a>
              </li>
              <li>
                <a href="https">
                  <img src={github} alt="github" />
                </a>
              </li>
            </ul>
            <div className="or">Or</div>
            <form onSubmit={this.handleSubmit}>
              <div className="input-box">
                <label htmlFor="email">Your email</label>
                <input
                  value={this.state.email}
                  onChange={this.handleChangeInput}
                  id="email"
                  type="text"
                  placeholder="Write your email"
                />
              </div>
              <div style={{ position: "relative" }} className="input-box">
                <img
                  style={{
                    position: "absolute",
                    top: "50px",
                    right: "20px",
                    cursor: "pointer",
                  }}
                  src={eye}
                  alt="eye"
                  onClick={this.showpassword}
                />
                <label htmlFor="password">Enter your password</label>
                <input
                  value={this.state.password}
                  onChange={this.handleChangeInput}
                  id="password"
                  type={this.state.passwordtype}
                  placeholder="•••••••••"
                />
              </div>

              <div className="input-box">
                <input
                  type="submit"
                  value={this.state.Isloading ? "Loading..." : "Login"}
                />
              </div>

              <Link to="/Sign-up">
                Don’t have an account?
                <span style={{ color: "blue" }}> Register</span>
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
