import React, { Component } from "react";
import "./style.css";
import Title from "../Title";
import Game from "../Game";
import GodOfWars from "../../Images/123321.png";
import StreakPic from "../../Images/Streak.png";

export default class Trophy extends Component {
  render() {
    return (
      <div className="Trophy">
        <Title  name="most recent trophy" />
        <div className="images">
          <Game
            trophy={true}
            img={GodOfWars}
            GameName="assassin's creed odyssey"
            Time="last played: 34 hours ago"
            streakTitle="perfect KILL streak "
            percentage="You are in the 0.5% "
            streakImg={StreakPic}
          />
        </div>
      </div>
    );
  }
}
