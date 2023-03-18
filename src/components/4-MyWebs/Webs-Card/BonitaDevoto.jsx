import "./webscard.css";
import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import Video from "../../../assets/videos/Bonita.mp4";
import { IoLogoGithub } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";


const BonitaDevoto = () => {

    const handleClickGitHub = () => {
        window.open("https://github.com/Franandrade94/Dogs-PI-main")
    }

    const handleClickDeploy = () => {
        window.open("https://9-pf-deploy-font.vercel.app/")
    }


    return(
        <div className="Web-Card">
            <div>
                <h2 className="Card-title">Bonita Devoto</h2>

                <div className="Card-Container">
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

