import "./experience.css";
import React from "react";

const Experience = () => {

    return(
        <div className="MyExperience" id="courses">
            <div className="Experience-Container">
                <h1>My Experiences</h1>
                <div className="All-Experiences">
                    <div className="Experiences">
                        <h2>2022-2023</h2>
                        <div>
                            <h3>Henry FullStack Developer</h3>
                            <p> 
                                Henry FullStack course starting from June 2022. Upon completing all the
                                modules:
                                <br/><br/>
                                - M1 (8) Advanced JavaScript.
                                <br/>
                                - M2 (10) Front-end (React and Redux).
                                <br/>
                                - M3 (10) Back-end (Node.js, Express).
                                <br/>
                                - M4 (10) Database (SQL, Sequelize, Postgres).
                                <br/>
                                - PI (Individual Project) Approved.
                                <br/>
                                - PF (Final Group Project) Completion of an E-commerce  site Approved.
                            </p>
                        </div>
                    </div>

                    <div className="Experiences">
                        <h2>2021-Today</h2>
                        <div>
                            <h3>Freelance WebDeveloper Design</h3>
                            <p> Full Stack web development.
                                Creating an E-commerce site using Sql, React, Redux, Node.js, Sequelize,
                                Auth0, and Stripe.</p>
                        </div>
                        
                        <br/>

                        <div>
                            <h3>Electronics repair and support.</h3>
                            <p>Assembly and support of Televisions, Cellphones, Desktop Computers,
                            and Notebooks.</p>
                        </div>
                    </div>

                    <div className="Experiences">
                        <h2>2018-2021</h2>
                        <div>
                            <h3>Administrative Employee at LiqueedS.A.</h3>
                            <p>
                                <br/>
                                - Customer service.
                                <br/>
                                - Assistance in strategic decision-making.
                                <br/>
                                - Analysis of customer needs.
                                <br/>
                                - Assembly of materials and logistics for courses and events.
                            </p>
                        </div>
                    </div>

                    <div className="Experiences">
                        <h2>2017-2018</h2>
                        <div>
                            <h3>Freelance Graphic Designer</h3>
                            <p>
                                <br/>
                                - Illustrations.
                                <br/>
                                - Editorial designs.
                                <br/>
                                - Web designs.
                            </p>
                        </div>
                    </div>

                    <div className="Experiences">
                        <h2>2013-2017</h2>
                        <div>
                            <h3>Dental Assistant at Dr. Marcelo Carta Office</h3>
                            <p>
                                <br/>
                                - Patient reception.
                                <br/>
                                - Complete dental care.
                                <br/>
                                - Hygienist (disinfection of the room and instruments).
                            </p>
                        </div>
                    </div>

                </div>
            </div>            
        </div>
    )
}

export default Experience;