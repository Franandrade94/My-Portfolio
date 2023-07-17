import "./webscard.css";
import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { IoLogoGithub } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";


const ConvolutionAi = () => {

    const handleClickGitHub = () => {
        window.open("https://github.com/convolution-ai/convolution-ai-landing")
    }

    const handleClickDeploy = () => {
        window.open("https://www.convolution-ai.com/")
    }


    return(
        <div className="Web-Card">
            <div>
                <h2 className="Card-title">ConvolutionAI</h2>
                <h3 className="Title-Card">Web Site</h3>
                <div className="Card-Container">
                    <div className="React-Player-div">
                        <ReactPlayer

                            url="https://www.youtube.com/watch?v=hB9cgyEdYIw"
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

export default ConvolutionAi;
