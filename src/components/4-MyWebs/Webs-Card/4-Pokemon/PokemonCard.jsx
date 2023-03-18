import "./pokemoncard.css";
import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import Video from "../../../../assets/videos/Pokemon.mp4";
import { IoLogoGithub } from "react-icons/io5";
//import { CgWebsite } from "react-icons/cg";


const Pokemon = () => {

    const handleClickGitHub = () => {
        window.open("https://github.com/Franandrade94/Dogs-PI-main")
    }


    return(
        <div className="Pokemon-Card">
            <div>
                <h2 className="Pokemon-title">PROXIMAMENTE </h2>
                <h3>Pokemon App</h3>
                <div className="Pokemon-Container">
                    <div className="React-Player-div">
                        <ReactPlayer

                            url={Video}
                            controls
                            width="100%"
                            height="100%"
                        />
                    </div>

                    <div className="Link-Icons">
                        <div className="Web-GitHub">
                            <Link onClick={handleClickGitHub}>
                                <IoLogoGithub className="Back-icon"/>
                            </Link>
                        </div>

                        {/* <div className="Web-GitHub">
                            <CgWebsite className="Back-icon"/>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Pokemon;

