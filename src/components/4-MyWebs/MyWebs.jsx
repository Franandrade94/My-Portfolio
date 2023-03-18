import "./mywebs.css";
import React from "react";
import Dogs from "./Webs-Card/1-PI-Dogs/Dogs";
import BonitaDevoto from "./Webs-Card/2-PF-BonitaDevoto/BonitaDevoto";
import VideoGames from "./Webs-Card/3-PI-VideoGames/VideoGames";
import Pokemon from "./Webs-Card/4-Pokemon/PokemonCard";



const MyWebs = () => {
    return(
        <div className="Project-All" id="projects">
            <div className="Project-Container">
                
                <div className="Project-Title">
                    <h2>My Projects</h2>
                </div>
                <div>
                
                <div className="Projects-Card-Container">
                
                    <div className="Projects-Card">

                        <div className="Dogs-Card">
                            <Dogs/>
                        </div>

                        <div className="BonitaDevoto-Card">
                            <BonitaDevoto/>
                        </div>
                    
                        <div className="Videogames-Card">
                            <VideoGames/>
                        </div>

                        <div className="Pokemon-Card">
                            <Pokemon/>
                        </div>
                        
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
};

export default MyWebs;