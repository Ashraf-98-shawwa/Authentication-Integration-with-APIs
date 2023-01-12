import React, { Component } from 'react'
import "./style.css"
import Keys from "../../Images/controls.png";
import like from "../../Images/heart.png";
import setting from "../../Images/setting.png";
import puzzle from "../../Images/puzzle.png";
import sun from "../../Images/sun.png";
import moon from "../../Images/moon.png";

export default class Controls extends Component {
  render() {
    return (
      <div className="controls">
        <img src={Keys} alt="move keys" />
        <div className="settings">
          <img src={like} alt="like" />
          <img src={setting} alt="setting" />
          <img src={puzzle} alt="puzzle" />
        </div>
        <div className="theme">
          <img src={moon} alt="moon" />
          <img src={sun} alt="sun" />
        </div>
        <div className='line'></div>
      </div>
    );
  }
}
