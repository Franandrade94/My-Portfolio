import "./principalpage.css";
import React from "react";
import Home from "../pages/2-Home/Home";
import AboutMe from "../pages/3-AboutMe/AboutMe";
import Knowledge from "../pages/4-KnowledgePage/Knowledge";
import Projects from "../pages/5-Projects/Projects";
import Courses from "../pages/6-Courses/Courses";

const PrincipalPage = () => {
    return (
        <div className="principalPage">
            <Home/>
            <AboutMe/>
            <Knowledge/>
            <Projects/>
            <Courses/>
        </div>
    )
};

export default PrincipalPage