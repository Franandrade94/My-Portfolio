import "./mywebs.css";
import React, { Component } from "react";
import Dogs from "./Webs-Card/Dogs";
import Bonita from "./Webs-Card/BonitaDevoto";
import Pokemon from "./Webs-Card/PokemonCard";
import Videogames from "./Webs-Card/VideoGames";




class MyWebs extends Component {
    render() {

      return (
        <div className="Project-All" id="projects">
          <div className="Project-Container">
            <h2 className="Project-Title">My Projects</h2>
            
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
              
            </div>
        </div>
      );
    }
  }
  
  export default MyWebs;