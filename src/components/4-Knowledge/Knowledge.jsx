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
                
                <div className="Knowledge-Title" data-aos="fade-left">
                    <h2>My Knowledge</h2>
                </div>

                <div className="Knowledge-IT">
                    
                    <div className="Front-Card" data-aos="fade-right">
                        <FrontEnd/>
                    </div>

                    <div className="Back-Card" data-aos="fade-left">
                        <BackEnd/>
                    </div>
                    
                    <div className="Other-Card" data-aos="fade-right">
                        <OtherKnowledge/>
                    </div>

                    <div className="Languages-Card" data-aos="fade-left">
                        <Languages/>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Knowledge;