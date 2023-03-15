import "./presentacion.css";
import React from "react";
import { Link } from "react-router-dom";
import { IoLogoWhatsapp, IoLogoGoogle } from "react-icons/io5";
import { IoLogoLinkedin , IoLogoGithub} from "react-icons/io";
import img  from "../../assets/images/Fran1-removebg.png";


const Presentacion = () => {

    const handleClickMail = () => {
        window.open("")
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
                        Front-end design-oriented and visual material creation since 2022.
                        <br/>
                        | Javascript | Front -end | React | Redux | HTML | CSS | Back-end | Node.Js | Sequelize | SQL | Express | Git
                    </p>   
                </div>
            </div>
                      
            <button className="GetInTouch">Get In Touch</button>

            <footer className="redes">
                <Link onClick={handleClickWhatsapp}>
                    <IoLogoWhatsapp className="icon-contact"/>
                </Link>

                <Link onClick={handleClickLinkedIn}>
                    <IoLogoLinkedin className="icon-contact"/>
                </Link>

                <Link onClick={handleClickGitHub}>
                    <IoLogoGithub className="icon-contact"/>
                </Link>

                <Link onClick={handleClickMail}>
                    <IoLogoGoogle className="icon-contact"/>
                </Link>
            </footer>
        </div>
    )
};

export default Presentacion;