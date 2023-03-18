import "./dogs.css";
import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import Video from "../../../../assets/videos/DogApp.mp4";
import { IoLogoGithub } from "react-icons/io5";
//import { CgWebsite } from "react-icons/cg";


const Dogs = () => {

    const handleClickGitHub = () => {
        window.open("https://github.com/Franandrade94/Dogs-PI-main")
    }


    return(
        <div className="Dog-Card">
            <div>
                <h2 className="Dog-title">Dogs Web</h2>

                <div className="Dog-Container">
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

export default Dogs;

