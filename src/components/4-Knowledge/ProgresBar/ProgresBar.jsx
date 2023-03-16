import "./progresbar.css";
import React from "react";

const ProgressBar = () => {
    return(
        <div className="ProgressBar">
        <div className="ProgresBar-Container">
           
           <h2 className="Front-End">Front-End</h2>

           <div className="skill-box">
                <span className="Skill-Title">HTML</span>
                <div className="skill-bar">
                    <span className="skill-per html">
                        <span className="tooltip">75%</span>
                    </span>
                </div>
            </div>

            <div className="skill-box">
                <span className="Skill-Title">CSS</span>
                <div className="skill-bar">
                    <span className="skill-per css">
                        <span className="tooltip">70%</span>
                    </span>
                </div>
            </div>

            <div className="skill-box">
                <span className="Skill-Title">JavaScript</span>
                <div className="skill-bar">
                    <span className="skill-per javascript">
                        <span className="tooltip">65%</span>
                    </span>
                </div>
            </div>

            <div className="skill-box">
                <span className="Skill-Title">React</span>
                <div className="skill-bar">
                    <span className="skill-per react">
                        <span className="tooltip">61%</span>
                    </span>
                </div>
            </div>

            <div className="skill-box">
                <span className="Skill-Title">Redux</span>
                <div className="skill-bar">
                    <span className="skill-per redux">
                        <span className="tooltip">70%</span>
                    </span>
                </div>
            </div>

        </div>
        </div>
    )
};

export default ProgressBar;