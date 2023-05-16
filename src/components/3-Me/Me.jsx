import "./me.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";


const Me = () => {

    useEffect( () => {
        Aos.init({ duration: 2000});
    }, []);

    const handleClickMyUbication =() => {
        window.open("https://goo.gl/maps/eRDfpzMrXfSofvcB9")
    }

    const handleClickMyResumeIngles =() => {
        window.open("https://drive.google.com/file/d/1Uv4AzRWlcJiVz-h38UIf-NvcC0ty72eW/view?usp=sharing")
    }

    const handleClickWhatsapp = () => {
        window.open("https://wa.me/5491156073772?text=Hello%20Francisco.%20How%20are%20you?%20I%20saw%20your%20personal%20page%20and%20I%20would%20like%20to%20get%20in%20touch%20with%20you.%20Thank%20you%20very%20much!%20 ")
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
                    <h2 data-aos="fade-left">About Me</h2>
                
                    <p data-aos="fade-right">
                        I have a deep passion for emerging technologies and thrive on seeking new challenges that allow me to continuously advance and evolve my career in the dynamic world of technology.
                        <br/><br/>
                        My proactive and adaptable nature, coupled with a strong sense of responsibility,
                        makes me an ideal candidate for any team. 
                        <br/><br/>
                        My ability to work effectively in diverse teams and adapt to new situations seamlessly sets
                        me apart from others in the field.
                    </p>
                </div>

                <div className="Personal-Info-Container">
                    <div className="Personal-Info">
                        <h2 data-aos="fade-left">Personal Information</h2>

                        <div className="Personal-Button">

                            <button data-aos="fade-right">
                                <p className="Name-P">Region</p>
                                <p className="Personal-P">
                                    <Link className="LinkMe" onClick={ handleClickMyUbication }>CABA, Argentina</Link>
                                </p>
                            </button>

                            <button data-aos="fade-left">
                                <p className="Name-P">My Resume</p>
                                <p className="Personal-P">
                                    <Link className="LinkMe" onClick={ handleClickMyResumeIngles }>English</Link>
                                </p>
                            </button>
                                       
                            <button data-aos="fade-right" onClick={() => window.location = 'mailto:franandrade15994@gmail.com'}>
                                <p className="Name-P">Email</p>
                                <p className="Personal-P-Link">
                                    franandrade15994@gmail.com 
                                </p>                        
                            </button>

                            <button data-aos="fade-left" onClick={handleClickWhatsapp}>
                                <p className="Name-P">Contact</p>
                                <p className="Personal-P-Link">
                                    +54 9 11 56073772 
                                </p>
                            </button>

                            <button data-aos="fade-right" onClick={handleClickLinkedIn}>
                                <p className="Name-P">LinkedIn</p>                        
                                <p className="Personal-P-Link">
                                    andrade-francisco94 
                                </p>
                            </button>

                            <button data-aos="fade-left" onClick={handleClickGitHub}>
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