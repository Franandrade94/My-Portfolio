import "./knowledge.css";
import React from "react";
import FrontEnd from "./Icon-Knowledge/Front-end/Front-end";
import BackEnd from "./Icon-Knowledge/Back-end/Back-end";
import OtherKnowledge from "./Icon-Knowledge/OtherKnowledge/OtherKnowledge";
import Languages from "./Icon-Knowledge/Languages-Knowledges/Languages";


const Knowledge = () => {
    return(
        <div className="Knowledge-All" id="Knowledge">
            <div className="Knowledge-Container">
                
                <div className="Knowledge-Title">
                    <h2>My Knowledge</h2>
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

                    <div className="Languages-Card">
                        <Languages/>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Knowledge;