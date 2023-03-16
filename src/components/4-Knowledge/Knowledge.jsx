import "./knowledge.css";
import React from "react";
import Backend from "./ProgresBar/Back-EndProcessBa";
import FrontEnd from "./ProgresBar/Front-EndProcessBar";

const Knowledge = () => {
    return(
        <div>
            <div className="Knowledge-Container">
                <div className="Knowledge-Title">
                    <h2 id="Knowledge">My Knowledge</h2>
                </div>

                <div className="Process-Bars">
                    <FrontEnd/>
                    <Backend/>
                </div>

            </div>
        </div>
    )
};

export default Knowledge;