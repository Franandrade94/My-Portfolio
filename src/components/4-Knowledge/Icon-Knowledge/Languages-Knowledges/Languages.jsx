import "./languages.css";
import React from "react";
import { RiEnglishInput } from "react-icons/ri";
import { BiWorld } from "react-icons/bi";


const Languages = () => {
    return(
        <div className="Languages-Icons">
            <div>
                <h2 className="Language-title">Languages</h2>

                <div className="Language-Container">
                
                    <div className="Language-Knowledge">
                        <RiEnglishInput className="icon"/>
                        <p>English</p>
                        <br/>
                        <p>EF Set C1(Advanced)</p>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default Languages;