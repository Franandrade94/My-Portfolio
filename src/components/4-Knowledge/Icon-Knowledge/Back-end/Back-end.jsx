import "./back-end.css";
import React from "react";
import { IoLogoNodejs } from "react-icons/io";
import { SiSequelize, SiPostgresql, SiExpress} from "react-icons/si";



const BackEnd = () => {
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
                        <SiPostgresql className="Back-icon"/>
                        <p>SQL</p>
                    </div>

                    <div className="Back-Knowledge">
                        <SiExpress className="Back-icon"/>
                        <p>Express</p>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default BackEnd;

