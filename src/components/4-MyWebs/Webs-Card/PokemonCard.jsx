import "./webscard.css";
import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { IoLogoGithub } from "react-icons/io5";
//import { CgWebsite } from "react-icons/cg";


const Pokemon = () => {

    const handleClickGitHub = () => {
        window.open("https://github.com/Franandrade94/1-PI-Pokemon")
    }


    return(
        <div className="Web-Card">
            <div>
                <h2 className="Card-title">PROXIMAMENTE </h2>
                <h3 className="Title-Card">Pokemon App</h3>
                <div className="Card-Container">
                    <div className="React-Player-div">
                        <ReactPlayer

                            url="https://youtu.be/jWA9eHfboiA"
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

