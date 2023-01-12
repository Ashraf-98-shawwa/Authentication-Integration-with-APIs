import React, { Component } from "react";
import "./style.css";
import PlayedGame from "../PlayedGame";
import Title from "../Title";
import game1 from "../../Images/game1.png";
import game2 from "../../Images/game2.png";
import game3 from "../../Images/game3.png";
import game4 from "../../Images/game4.png";

export default class Lastplayed extends Component {
  render() {
    return (
      <div className="Lastplayed">
        <Title name="last played" />
        <div className="Played-games-box">
          <PlayedGame pic={game1} body="Hogwarts Legacy 50%" />
          <PlayedGame pic={game2} body="God Of War: Ragnarök 72.5%" />
          <PlayedGame pic={game3} body="Crash Bandicoot N. Sane Trilogy 34%" />
          <PlayedGame pic={game4} body="Dying Light 2 Stay Human 100%" />
        </div>
      </div>
    );
  }
}
