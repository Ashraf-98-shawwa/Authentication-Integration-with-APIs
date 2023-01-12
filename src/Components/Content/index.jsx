import React, { Component } from "react";
import "./style.css";
import Games from "../Games";
import User from "../User";
import Lastplayed from "../Lastplayed";
import Trophy from "../Trophy";
import Friends from "../Friends";

export default class Content extends Component {
  render() {
    return (
      <div className="home-content">
     

        <User />
        <Games />
        <div className="Lower-container">
          <Lastplayed />
          <Trophy />
          <Friends />
        </div>
      </div>
    );
  }
}
