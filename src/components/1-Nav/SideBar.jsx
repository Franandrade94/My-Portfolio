import "./sidebar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoHome, IoNewspaper, IoSettings, IoBook, IoBriefcase, IoSchool, IoBeer } from "react-icons/io5";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { RiContactsBook2Fill } from "react-icons/ri";


const SideBar = () => {

    const [ active, setActive] = useState(false);

    const activateNav = () => {
        setActive(!active)
    }

    return(
        <div className={ active ? "sideNav" : "sideNav-Mobile"}>

            <div className="menu-icon" onClick={activateNav}>
                { !active ? <IoMdMenu className="menu"/> : <IoMdClose className="close-icon"/>}
            </div>

            <nav>
                <ul className= {active ? "ul-item" : "ul-item oicon"}>
                    <li>
                        <Link to="/">
                            <IoHome className="icon"/>
                        </Link>
                        <Link className="Word-Link" to="/">
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link to="/myresume">
                            <IoNewspaper className="icon"/>
                        </Link>
                        <Link className="Word-Link" to="/myresume">
                            My Resume
                        </Link>
                    </li>

                    <li>
                        <Link to="/myprojects">
                            <IoSettings className="icon"/>
                        </Link>
                        <Link className="Word-Link" to="/myprojects">
                            My Projects
                        </Link>
                    </li>

                    <li>
                        <Link to="/mycourses">
                            <IoBook className="icon"/>
                        </Link>
                        <Link className="Word-Link" to="/mycourses">
                            My Courses
                        </Link>
                    </li>

                    <li>
                        <Link to="/myexperience">
                            <IoBriefcase className="icon"/>
                        </Link>
                        <Link className="Word-Link" to="/myexperience">
                            My Experience
                        </Link>
                    </li>

                    <li>
                        <Link to="/myknoowledge">
                            <IoSchool className="icon"/>
                        </Link>
                        <Link className="Word-Link" to="/myknowledge">
                            My Knowledge
                        </Link>
                    </li>

                    <li>
                        <Link to="/myhobbies">
                            <IoBeer className="icon"/>
                        </Link>
                        <Link className="Word-Link" to="/myhobbies">
                            My Hobbies
                        </Link>
                    </li>

                    <li>
                        <Link to="">
                            <RiContactsBook2Fill className="icon"/>
                        </Link>
                        <Link className="Word-Link" to="">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default SideBar;