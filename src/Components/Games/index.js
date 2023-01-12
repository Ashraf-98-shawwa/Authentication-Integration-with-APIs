import React, { Component } from "react";
import GodOfWars from "../../Images/wars.png";
import superman from "../../Images/superman.png";
import spiderman from "../../Images/spiderman.png";
import "swiper/css";
import "./style.css";
import Game from "../Game";
import Title from "../Title";
import { Swiper, SwiperSlide } from "swiper/react";

export default class Games extends Component {
  render() {
    return (
      <div className="Games">
        <Title name="NEW GAMES" />
        <div className="images">
          <Swiper spaceBetween={39}
            
            slidesPerView={2}>
            <SwiperSlide>
              <Game
                img={GodOfWars}
                body="Join in the new DLC with Kratos to learn more about him and his
              future."
              />
            </SwiperSlide>
            <SwiperSlide>
              <Game
                img={superman}
                body="Be part of the Suicide Squad and kill the Justice League!
              "
                author="-Amanda Waller"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Game
                img={spiderman}
                body=" Miles Morales discovers powers from his mentor, Peter Parker.
              Master his unique, bio-electric venom blast attacks."
              />
            </SwiperSlide>
            <SwiperSlide>
              <Game
                img={GodOfWars}
                body="J1111oin in the new DLC with Kratos to learn more about him and his
              future."
              />
            </SwiperSlide>
            <SwiperSlide>
              <Game
                img={superman}
                body="2222222Be part of the Suicide Squad and kill the Justice League!
              "
                author="-Amanda Waller"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Game
                img={superman}
                body="2222222Be part of the Suicide Squad and kill the Justice League!
              "
                author="-Amanda Waller"
              />
            </SwiperSlide>
          
  

          
          </Swiper>
        </div>
      </div>
    );
  }
}
