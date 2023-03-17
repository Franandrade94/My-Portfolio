import "./otherknowledge.css";
import React from "react";
import { IoLogoReact,IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { IoLogoNodejs } from "react-icons/io";
import { SiSequelize } from "react-icons/si";



const OtherKnowledge = () => {
    return(
        <div className="Back-End-Icons">
            <div>
                <h2 className="Back-title">Back-End</h2>

                <div className="Back-Container">
                
                    <div className="Back-Knowledge">
                        <IoLogoNodejs className="Back-icon"/>
                        <p>Node.Js</p>
                    </div>

                    <div className="Back-Knowledge">
                        <SiSequelize className="Back-icon"/>
                        <p>Sequelize</p>
                    </div>

                    <div className="Back-Knowledge">
                        <IoLogoJavascript className="Back-icon"/>
                        <p>SQL</p>
                    </div>

                    <div className="Back-Knowledge">
                        <IoLogoReact className="Back-icon"/>
                        <p>Express</p>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default OtherKnowledge;

