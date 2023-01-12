import React, { Component } from 'react'
import Overlay from "../Overlay"
import "./style.css"
import signUpLogo from "../../Images/sign-up-logo.png";
import signInLogo from "../../Images/sign-in-logo.png";
import dots from "../../Images/dots.png";
import triangle from "../../Images/white-triangle.png";
import joystick from "../../Images/joystick-blue.png";


export default class LeftSide extends Component {
  render() {

    if (this.props.page === "sign-up") {
          return (
            <div className="left-sign-up">
              <Overlay>
                <img className="sign-up-logo" src={signUpLogo} alt="Gamers" />
                <img className="dots" src={dots} alt="dots" />
                <p className="commas">“</p>
                <p className="paragraph">
                  I always observe the people who pass by when I ride an
                  escalator. I'll never see most of them again, so I imagine a
                  lot of things about their lives... about the day ahead of
                  them.
                </p>
                <span className="Name">Hideo Kojima</span>
                <img
                  className="triangle"
                  src={triangle}
                  alt="white-triangle-logo"
                />
              </Overlay>
            </div>
          );
    }
    else {
          return (
            <div className="left-sign-in">
              <img className="sign-in-logo" src={signInLogo} alt="Gamers" />
              <p className="commas">“</p>
              <p className="paragraph">
                I always observe the people who pass by when I ride an
                escalator. I'll never see most of them again, so I imagine a lot
                of things about their lives... about the day ahead of them.
              </p>
              <span className="Name">Hideo Kojima</span>
              <img  className='joystic' src={joystick} alt="joystick" />
            </div>
          );
    }

  }
}
