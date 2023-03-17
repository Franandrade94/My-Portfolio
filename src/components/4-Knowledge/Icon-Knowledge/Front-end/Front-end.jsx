import "./front-end.css";
import React from "react";
import { IoLogoReact,IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from "react-icons/io5";

const FrontEnd = () => {
    return(
        <div className="Front-End-Icons">
            <div>
                <h2 className="Front-title">Front-End</h2>

                <div className="Front-Container">
                
                    <div className="Front-Knowledge">
                        <IoLogoHtml5 className="icon"/>
                        <p>HTML</p>
                    </div>

                    <div className="Front-Knowledge">
                        <IoLogoCss3 className="icon"/>
                        <p>CSS</p>
                    </div>

                    <div className="Front-Knowledge">
                        <IoLogoJavascript className="icon"/>
                        <p>JavaScript</p>
                    </div>

                    <div className="Front-Knowledge">
                        <IoLogoReact className="icon"/>
                        <p>React-Redux</p>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default FrontEnd;
