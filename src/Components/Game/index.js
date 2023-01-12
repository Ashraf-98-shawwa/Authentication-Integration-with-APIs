import React, { Component } from "react";
import "./style.css";

export default class Game extends Component {
  render() {
    if (this.props.trophy) {
      return (
        <div className="img trophy">
          <img src={this.props.img} alt="" />

          <div className="trophy">
            {this.props.GameName}
            <span>{this.props.Time}</span>
          </div>

          <div className="Streak">
            <div className="content">
              {this.props.streakTitle}
              <br />
              <span className="percentage">{this.props.percentage}</span>
            </div>
            <img src={this.props.streakImg} alt="Streak" />
          </div>
        </div>
      );
    } else {
      return (
        <div className="img">
          <img src={this.props.img} alt="" />
          <p>
            {this.props.body}
            <br />
            {this.props.author}
          </p>
        </div>
      );
    }
  }
}
