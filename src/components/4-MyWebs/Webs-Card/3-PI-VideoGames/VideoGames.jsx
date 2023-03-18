import "./videogames.css";
import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import Video from "../../../../assets/videos/VideoGames.mp4";
import { IoLogoGithub } from "react-icons/io5";
//import { CgWebsite } from "react-icons/cg";


const VideoGames = () => {

    const handleClickGitHub = () => {
        window.open("https://github.com/Franandrade94/PI-Videogames-main")
    }


    return(
        <div className="Video-Card">
            <div>
                <h2 className="Video-title">PROXIMAMENTE</h2>
                <h3>VideoGames Web</h3>
                <div className="Video-Container">
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

export default VideoGames;

