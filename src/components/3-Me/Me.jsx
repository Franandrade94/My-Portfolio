import "./me.css";
import React from "react";


const Me = () => {

    const handleClickLinkedIn = () => {
        window.open("https://www.linkedin.com/in/andrade-francisco94/")
    }

    return(
        <div>
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

            <div className="Personal-Info">
                <h2>Personal Information</h2>

                <div className="Personal-Button">
                    <button>
                        Name
                        <p className="Personal-P">
                            Francisco Andrade
                        </p>
                    </button>

                    <button>
                        Birth
                        <p className="Personal-P">
                            15-09-1994
                        </p>
                    </button>
                    
                        <button>
                            Region
                            <p className="Personal-P">
                                CABA, Argentina
                            </p>
                        </button>
                    
                        <button>
                            Email
                            <p className="Personal-P">
                                franandrade15994@gmail.com 
                            </p>
                        </button>

                        <button>
                            Contact
                            <p className="Personal-P">
                                +54 9 11 56073772 
                            </p>
                        </button>

                        <button onClick={ handleClickLinkedIn }>
                            LinkedIn
                        
                            <p className="Personal-P">
                                andrade-francisco94 
                            </p>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default Me;