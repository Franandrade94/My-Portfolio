import "./knowledge.css";
import React from "react";
import ProgressBar from "./ProgresBar/ProgresBar";

const Knowledge = () => {
    return(
        <div>
            <div className="Knowledge-Container">
                <div className="Knowledge-Title">
                    <h2 id="Knowledge">My Knowledge</h2>
                </div>

                <div>
                    <ProgressBar/>
                </div>

            </div>
        </div>
    )
};

export default Knowledge;