import "./webscard.css";
import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { IoLogoGithub } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";


const CarFood = () => {

    const handleClickGitHub = () => {
        window.open("https://github.com/Franandrade94/donde-comer")
    }

    const handleClickDeploy = () => {
        window.open("https://cars-food.vercel.app/")
    }


    return(
        <div className="Web-Card">
            <div>
                <h2 className="Card-title">Car's Food</h2>
                <h3 className="Title-Card">Web App</h3>
                <div className="Card-Container">
                    <div className="React-Player-div">
                        <ReactPlayer

                            url="https://www.youtube.com/watch?v=uAR6LC5a_1A"
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

                        <div className="Web-GitHub">
                            <Link onClick={handleClickDeploy}>
                                <CgWebsite className="Back-icon"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CarFood;
