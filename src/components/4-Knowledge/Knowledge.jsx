import "./knowledge.css";
import React from "react";
import FrontEnd from "./Icon-Knowledge/Front-end/Front-end";
import BackEnd from "./Icon-Knowledge/Back-end/Back-end";
import OtherKnowledge from "./Icon-Knowledge/OtherKnowledge/OtherKnowledge";


const Knowledge = () => {
    return(
        <div>
            <div className="Knowledge-Container">
                
                <div className="Knowledge-Title">
                    <h2 id="Knowledge">My Knowledge</h2>
                </div>

                <div className="Knowledge-IT">
                    
                    <div className="Front-Card">
                        <FrontEnd/>
                    </div>

                    <div className="Back-Card">
                        <BackEnd/>
                    </div>
                    
                    <div className="Other-Card">
                        <OtherKnowledge/>
                    </div>

                </div>

            </div>
        </div>
    )
};

export default Knowledge;