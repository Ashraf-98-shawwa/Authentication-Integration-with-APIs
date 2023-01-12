import React, { Component } from 'react'
import Title from '../Title';
import FRIENDS from "../../Images/FRIENDS.png";
import "./style.css"

export default class Friends extends Component {
  render() {
      return (
        <div className="Friends">
          <Title name="Friends" />
          <img src={FRIENDS} alt="Friends" />
        </div>
      );
  }
}
