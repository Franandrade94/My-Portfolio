import "./knowledge.css";
import React from "react";
import FrontEnd from "./ProgresBar/Front-End";
import BackEnd from "./ProgresBar/Back-End";

const Knowledge = () => {
    return(
        <div>
            <div className="Knowledge-Container">
                <div className="Knowledge-Title">
                    <h2 id="Knowledge">My Knowledge</h2>
                </div>

                <div className="Process-Bars">
                    <FrontEnd/>
                    <BackEnd/>
                </div>

            </div>
        </div>
    )
};

export default Knowledge;