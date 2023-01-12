import React, { Component } from "react";
import LeftSide from "../Components/LeftSide";
import GoogleIcon from "../Images/google-icon.png";
import * as yup from "yup";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import Input from "../Components/Input";
import axios from "axios";

const regularExpression =
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

export default class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    passwordRepeat: "",
    checkbox: false,
    strength: "0",
    isloading: false,
  };

  schema = yup.object().shape({
    checkbox: yup
      .boolean()
      .oneOf([true], "You should check the checkbox")
      .required(),
    passwordRepeat: yup
      .string()
      .oneOf([yup.ref("password"), null])
      .required(),

    password: yup
      .string()
      .min(8)
      .matches(
        regularExpression,
        "Password should contain small letters,capital letters,numbers and special charachter"
      )
      .required(),
    email: yup.string().email().required(),

    name: yup.string().required(),
  });

  checkPasswordStrength = (password) => {
    let strengthValue = 0;
    if (password.length >= 8) {
      strengthValue = strengthValue + 1;
    }
    if (password.match(/[a-z]/g)) {
      strengthValue = strengthValue + 1;
    }
    if (password.match(/[A-Z]/g)) {
      strengthValue = strengthValue + 1;
    }
    if (password.match(/[0-9]/g)) {
      strengthValue = strengthValue + 1;
    }

    // Check if it contains Sympols
    if (password.match(/[^0-9a-zA-Z\s]/g)) {
      strengthValue = strengthValue + 1;
    }
    this.setState({ strength: strengthValue.toString() });
  };

  handleChangeInput = (e) => {
    const { value, id } = e.target;
    this.setState({ [id]: value });

    if (e.target.id === "password") {
      this.checkPasswordStrength(e.target.value);
    }
  };

  handleChangeCheckbox = (e) => {
    const { checked } = e.target;
    this.setState({ checkbox: checked });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ isloading: true });

    this.schema
      .validate({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        passwordRepeat: this.state.passwordRepeat,
        checkbox: this.state.checkbox,
      })
      .then(async () => {
        const res = await axios.post(
          "https://react-tt-api.onrender.com/api/users/signup",
          {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
          }
        );
        if (res) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("name", res.data.name);
          this.setState({ isloading: false });
          this.props.login();
        }
        swal({
          title: "Success!",
          text: "Registed Successfully",
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

  render() {
    return (
      <div className="The-Page">
        <LeftSide page="sign-up" />
        <div className="right-side">
          <Link to="/Sign-in">
            <span> &lt; </span> Back
          </Link>

          <div className="form-box">
            <h1>Register Individual Account!</h1>
            <p>
              For the purpose of gamers regulation, your details are required.
            </p>
            <form>
              <Input
                label="Name*"
                id="name"
                type="text"
                placeholder="Enter your name "
                value={this.state.name}
                Change={this.handleChangeInput}
              />
              <Input
                label="Email address*"
                id="email"
                type="text"
                placeholder="Enter email address"
                value={this.state.email}
                Change={this.handleChangeInput}
              />

              <Input
                label="Create password*"
                id="password"
                type="password"
                placeholder="Password"
                value={this.state.password}
                Change={this.handleChangeInput}
                passwordMessage={true}
                strength={this.state.strength}
              />
              <Input
                label="Repeat password*"
                id="passwordRepeat"
                type="password"
                placeholder="Repeat password"
                value={this.state.passwordRepeat}
                Change={this.handleChangeInput}
              />

              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
                className="input-box"
              >
                <input
                  style={{ display: "inline", marginTop: "-5px" }}
                  id="checkbox"
                  type="checkbox"
                  onChange={this.handleChangeCheckbox}
                  checked={this.state.checkbox}
                />
                <label style={{ display: "inline" }} htmlFor="terms">
                  I agree to terms & conditions
                </label>
              </div>

              <div className="input-box">
                <input
                  onClick={this.handleSubmit}
                  type="submit"
                  value={
                    this.state.isloading ? "Loading ... " : "Register Account"
                  }
                />
              </div>
              <span>or</span>
              <div className="input-box">
                <Link to="/Sign-in">
                  <button type="submit">
                    <img src={GoogleIcon} alt="google-icon" />
                    login
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
