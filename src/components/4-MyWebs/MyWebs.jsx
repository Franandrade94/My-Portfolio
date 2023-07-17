import "./mywebs.css";
import React, { Component } from "react";
import Dogs from "./Webs-Card/Dogs";
import Bonita from "./Webs-Card/BonitaDevoto";
import Pokemon from "./Webs-Card/PokemonCard";
import Videogames from "./Webs-Card/VideoGames";
import Gsa from "./Webs-Card/Gsa"
import ConvolutionAi from "./Webs-Card/ConvolutionAi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class MyWebs extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 790,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            autoplay: false,
          },
        },
      ],
    };

    return (
      <div className="Project-All" id="projects">
        <div className="Project-Container ">
          <h2 className="Project-Title" data-aos="fade-right">My Projects</h2>
          <div data-aos="fade-left" >
          <Slider {...settings}>
            
            <div>
              <ConvolutionAi />
            </div>
            <div>
              <Gsa />
            </div>
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
