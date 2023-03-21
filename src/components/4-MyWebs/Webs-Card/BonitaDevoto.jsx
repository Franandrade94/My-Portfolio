import "./webscard.css";
import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { IoLogoGithub } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";


const BonitaDevoto = () => {

    const handleClickGitHub = () => {
        window.open("https://github.com/Franandrade94/9-PF-Deploy-Font")
    }

    const handleClickDeploy = () => {
        window.open("https://9-pf-deploy-font.vercel.app/")
    }


    return(
        <div className="Web-Card">
            <div>
                <h2 className="Card-title">Bonita Devoto</h2>
                <h3 className="Title-Card">E-Commerce</h3>
                <div className="Card-Container">
                    <div className="React-Player-div">
                        <ReactPlayer

                            url="https://res.cloudinary.com/diw3vl6dr/video/upload/v1679125535/rzxaxbs1lg7yqyatqwe0.mp4"
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

export default BonitaDevoto;

