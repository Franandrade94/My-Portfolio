import "./otherknowledge.css";
import React from "react";
import { IoLogoGoogle } from "react-icons/io5";
import { IoLogoNodejs } from "react-icons/io";
import { SiAdobe, SiMicrosoftoffice } from "react-icons/si";
import { RiLightbulbLine } from "react-icons/ri";
import { BsGit } from "react-icons/bs";



const OtherKnowledge = () => {
    return(
        <div className="Other-Icons">
            <div>
                <h2 className="Back-title">Other Knowledges</h2>

                <div className="Other-Container">
                
                    <div className="Other-Knowledge">
                        <RiLightbulbLine className="Other-icon"/>
                        <p>Agile Methodologies</p>
                    </div>

                    <div className="Other-Knowledge">
                        <BsGit className="Other-icon"/>
                        <p>Git</p>
                    </div>

                    <div className="Other-Knowledge">
                        <IoLogoGoogle className="Other-icon"/>
                        <p>Google INC tools</p>
                    </div>

                    <div className="Other-Knowledge">
                        <SiAdobe className="Other-icon"/>
                        <p>Adobe Suite</p>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default OtherKnowledge;

