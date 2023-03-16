import "./progresbar.css";
import React from "react";

const BackEndProcessBar = () => {
    return(
        <div className="ProgressBar">
        <div className="ProgresBar-Container">
           
           <h2 className="Front-End">Back-End</h2>

           <div className="skill-box">
                <span className="Skill-Title">Node.js</span>
                <div className="skill-bar">
                    <span className="skill-per node">
                        <span className="tooltip">57%</span>
                    </span>
                </div>
            </div>

            <div className="skill-box">
                <span className="Skill-Title">Sequelize</span>
                <div className="skill-bar">
                    <span className="skill-per sequelize">
                        <span className="tooltip">55%</span>
                    </span>
                </div>
            </div>

            <div className="skill-box">
                <span className="Skill-Title">SQL</span>
                <div className="skill-bar">
                    <span className="skill-per sql">
                        <span className="tooltip">61%</span>
                    </span>
                </div>
            </div>

            <div className="skill-box">
                <span className="Skill-Title">Express</span>
                <div className="skill-bar">
                    <span className="skill-per express">
                        <span className="tooltip">58%</span>
                    </span>
                </div>
            </div>

        </div>
        </div>
    )
};

export default BackEndProcessBar;