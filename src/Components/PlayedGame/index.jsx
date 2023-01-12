import React, { Component } from 'react'
import "./style.css"

export default class PlayedGame extends Component {
  render() {
    return (
      <div className="played-game">
        <img src={this.props.pic} alt="game" />
        <p>{this.props.body}</p>
      </div>
    );
  }
}
