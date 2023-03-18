import "./mywebs.css";
import React, { Component } from "react";
import Dogs from "./Webs-Card/Dogs";
import Bonita from "./Webs-Card/BonitaDevoto";
import Pokemon from "./Webs-Card/PokemonCard";
import Videogames from "./Webs-Card/VideoGames";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class MyWebs extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 790,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          },
        },
      ],
    };

    return (
      <div className="Project-All" id="projects">
        <div className="Project-Container ">
          <h2 className="Project-Title">My Projects</h2>
          <Slider {...settings}>
            <div>
              <Bonita />
            </div>
            <div>
              <Dogs />
            </div>
            <div>
              <Videogames />
            </div>
            <div>
              <Pokemon />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default MyWebs;
