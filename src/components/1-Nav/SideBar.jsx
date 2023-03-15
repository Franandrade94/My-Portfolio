import "./sidebar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoHome, IoNewspaper, IoSettings, IoBook, IoBriefcase, IoSchool, IoBeer } from "react-icons/io5";
import { RiContactsBook2Fill } from "react-icons/ri";


const SideBar = () => {

    const [ active, setActive] = useState(flase)

    return(
        <div className="sideBar">
            <ul>
                <li>
                    <IoHome/>
                    <Link to="/">
                        Home
                    </Link>
                </li>

                <li>
                    <IoNewspaper/>
                    <Link to="">
                        My Resume
                    </Link>
                </li>

                <li>
                    <IoSettings/>
                    <Link to="">
                        My Proyects
                    </Link>
                </li>

                <li>
                    <IoBook/>
                    <Link to="">
                        My Courses
                    </Link>
                </li>

                <li>
                    <IoBriefcase/>
                    <Link to="">
                        My Experience
                    </Link>
                </li>

                <li>
                    <IoSchool/>
                    <Link to="">
                        My Knowledge
                    </Link>
                </li>

                <li>
                    <IoBeer/>
                    <Link to="">
                        My Hobbies
                    </Link>
                </li>

                <li>
                    <RiContactsBook2Fill/>
                    <Link to="">
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    )
};

export default SideBar;