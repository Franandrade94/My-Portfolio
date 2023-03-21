import "./me.css";
import React from "react";
import { Link } from "react-router-dom";


const Me = () => {

    const handleClickMyUbication =() => {
        window.open("https://goo.gl/maps/eRDfpzMrXfSofvcB9")
    }

    const handleClickMyResumeIngles =() => {
        window.open("https://drive.google.com/file/d/1j9v1xTfMZUBLRh1zrNajDRlYXvGwIs8n/view?usp=sharing")
    }

    const handleClickMyResumeEsp =() => {
        window.open("https://drive.google.com/file/d/1VLL3gPDHzVanASpnN157SpKJHaRBYmLo/view?usp=sharing")
    }

    const handleClickWhatsapp = () => {
        window.open("https://wa.me/5491156073772?text=Hola,%20Francisco%20¿Cómo%20estas?%20Vi%20tu%20página%20personal%20y%20me%20gustaría%20contactarte.%20Muchas%20Gracias!%20")
    }

    const handleClickLinkedIn = () => {
        window.open("https://www.linkedin.com/in/andrade-francisco94/")
    }

    
    const handleClickGitHub = () => {
        window.open("https://github.com/Franandrade94")
    }

    return(
        <div className="Me-All" id="aboutme"> 
            <div className="Me-Container">
                <div className="Me-Info">
                    <h2>About Me</h2>
                
                    <p>
                        Lover of new technologies and continuous learning, I am seeking job opportunities
                        that will allow me to deepen my professional career in the IT world.
                        <br/><br/>
                        I highlight my responsibility, proactivity, and ease of adapting to all circumstances, as
                        well as my great capacity for teamwork.
                    </p>
                </div>

                <div className="Personal-Info-Container">
                    <div className="Personal-Info">
                        <h2>Personal Information</h2>

                        <div className="Personal-Button">

                            <button>
                                <p className="Name-P">Region</p>
                                <p className="Personal-P">
                                    <Link className="LinkMe" onClick={ handleClickMyUbication }>CABA, Argentina</Link>
                                </p>
                            </button>

                            <button>
                                <p className="Name-P">My Resume</p>
                                <p className="Personal-P">
                                    <Link className="LinkMe" onClick={ handleClickMyResumeIngles }>English</Link>
                                    <Link className="LinkMe" onClick={ handleClickMyResumeEsp }>Spanish</Link>
                                </p>
                            </button>
                                       
                            <button onClick={() => window.location = 'mailto:franandrade15994@gmail.com'}>
                                <p className="Name-P">Email</p>
                                <p className="Personal-P-Link">
                                    franandrade15994@gmail.com 
                                </p>                        
                            </button>

                            <button onClick={handleClickWhatsapp}>
                                <p className="Name-P">Contact</p>
                                <p className="Personal-P-Link">
                                    +54 9 11 56073772 
                                </p>
                            </button>

                            <button onClick={handleClickLinkedIn}>
                                <p className="Name-P">LinkedIn</p>                        
                                <p className="Personal-P-Link">
                                    andrade-francisco94 
                                </p>
                            </button>

                            <button onClick={handleClickGitHub}>
                                <p className="Name-P">GitHub</p>
                                <p className="Personal-P-Link">
                                    Franandrade94
                                </p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Me;