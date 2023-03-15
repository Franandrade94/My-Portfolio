import "./presentacion.css";
import React from "react";
import { Link } from "react-router-dom";
import { IoLogoWhatsapp, IoLogoGoogle } from "react-icons/io5";
import { IoLogoLinkedin , IoLogoGithub} from "react-icons/io";

const Presentacion = () => {

    const handleClickMail = () => {
        window.open("franandrade15994@gmail.com")
    }

    const handleClickWhatsapp = () => {
        window.open("")
    }

    const handleClickGitHub = () => {
        window.open("https://github.com/Franandrade94")
    }

    const handleClickLinkedIn = () => {
        window.open("https://www.linkedin.com/in/andrade-francisco94/")
    }



    return(
        <div className="Portfolio-Container">
            <button className="Welcome">Welcome to My Portfolio</button>
            <div className="Presentacion-Container">
                <div>
                    <h1 className="presentacion">Hi! I'm <p className="Name">Francisco Andrade</p> <br/>FullStack Developer</h1>
                </div>
                <div>
                    <p className="Info">
                        Front-end design-oriented and visual material creation.
                        <br/>
                        I have always been intrigued by the world of programming, but I had never been motivated to take the plunge until after the pandemic, when I began to delve into this world through Python and web developer courses.
                    </p>   
                </div>
            </div>
            <button className="GetInTouch">Get In Touch</button>

            <div className="redes">
                <Link to={handleClickWhatsapp}>
                    <IoLogoWhatsapp className="icon-contact"/>
                </Link>

                <Link to={handleClickLinkedIn}>
                    <IoLogoLinkedin className="icon-contact"/>
                </Link>

                <Link to={handleClickGitHub}>
                    <IoLogoGithub className="icon-contact"/>
                </Link>

                <Link onClick={handleClickMail}>
                    <IoLogoGoogle className="icon-contact"/>
                </Link>
            </div>
        </div>
    )
};

export default Presentacion;