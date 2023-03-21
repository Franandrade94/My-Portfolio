import "./presentacion.css";
import React from "react";
import { Link } from "react-router-dom";
import { IoLogoWhatsapp, IoLogoGoogle } from "react-icons/io5";
import { IoLogoLinkedin , IoLogoGithub} from "react-icons/io";

const Presentacion = () => {

    
    const handleClickWhatsapp = () => {
        window.open("https://wa.me/5491156073772?text=Hello%20Francisco.%20How%20are%20you?%20I%20saw%20your%20personal%20page%20and%20I%20would%20like%20to%20get%20in%20touch%20with%20you.%20Thank%20you%20very%20much!%20 ")
    }

    const handleClickGitHub = () => {
        window.open("https://github.com/Franandrade94")
    }

    const handleClickLinkedIn = () => {
        window.open("https://www.linkedin.com/in/andrade-francisco94/")
    }



    return(
        <div>
        <div className="Portfolio-Container">
            {/* <button className="Welcome">Welcome to My Portfolio</button> */}
            <div className="GetInTouch-Position">
                <button className="GetInTouch" onClick={() => window.location = 'mailto:franandrade15994@gmail.com'}>Get In Touch</button>
            </div>
            
            <div className="Presentacion-Container">
                <div>
                    <h1 className="presentacion">Hi! I'm <p className="Name">Francisco Andrade</p> <br/>FullStack Developer</h1>
                </div>
                <div>
                    { window.innerWidth <= 790 ? 
                        (<p className="Info">
                            Front-end design-oriented and visual material creation since 2022.
                            <br/><br/>
                            | Javascript | Front -end | React |
                            <br/>
                            | Redux | HTML | CSS | 
                            <br/>
                            | Back-end | Node.Js | Sequelize | 
                            <br/>
                            | SQL | Express | Git
                    </p>) : (
                    <p className="Info">
                        Front-end design-oriented and visual material creation since 2022.
                        <br/><br/>
                        | Javascript | Front -end | React | Redux | HTML | CSS | Back-end | Node.Js | Sequelize | SQL | Express | Git
                    </p>
                    )
                    }   
                </div>
            </div>
        </div>
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

                <Link onClick={() => window.location = 'mailto:franandrade15994@gmail.com'}>
                    <IoLogoGoogle className="icon-contact"/>
                </Link>
            </footer>
        </div>
    )
};

export default Presentacion;