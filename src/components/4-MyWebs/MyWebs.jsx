import "./mywebs.css";
import React, { Component } from "react";
import Slider from "react-slick";
import Dogs from "./Webs-Card/Dogs";
import Bonita from "./Webs-Card/BonitaDevoto";
import Pokemon from "./Webs-Card/PokemonCard";
import Videogames from "./Webs-Card/VideoGames";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



class MyWebs extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 0,
        autoplay: true,
        responsive: [
          {
            breakpoint: 790,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 0,
              infinite: true,
              dots: true
            }
          }
        ]
      };
      return (
        <div className="Project-All" id="projects">
          <div className="Project-Container">
            <h2 className="Project-Title">My Projects</h2>
            <div className="slider-Container">
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
        </div>
      );
    }
  }
  
  export default MyWebs;