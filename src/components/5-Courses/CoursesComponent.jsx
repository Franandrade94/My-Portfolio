import "./coursescomponent.css";
import React from "react";

const CoursesComponent = () => {
    return(
        <div className="MyCourses" id="courses">
            <div className="Courses-Container">
                <h1>My Courses</h1>

                <div className="All-Courses">

                    <div className="It-Courses">
                        <h2 className="IT">It Courses</h2>
                        <div className="Course-2021">
                            <h2>2021</h2>
                        
                            <div className="course-info">
                                <h3>Web Developer</h3>
                                <p>Web Developer Course using HTML, CSS, and JavaScript technologies on Coursera.</p>
                            </div>

                            <div className="course-info">
                                <h3>JavaScript Basics</h3>
                                <p>Course JavaScript for Begginers on Coursera.</p>
                            </div>

                            <div className="course-info">
                                <h3>HTML5 Basics</h3>
                                <p>Introduction to HTML5, on    Coursera.</p>
                            </div>

                            <div className="course-info">
                                <h3>CSS Basics</h3>
                                <p>Introduction to CSS, on Coursera.</p>
                            </div>
                        </div>

                        <div className="Course-2020">
                            <h2>2020</h2>
                        
                            <div className="course-info">
                                <h3>Python Basics</h3>
                                <p>Course Pyton Basics, on Coursera.</p>
                            </div>
                        </div>
                    </div>

                    <div className="Other-Courses">
                        <h2 className="IT">Other Courses</h2>
                        <div className="Course-2019">

                            <h2>2019</h2>
                        
                            <div className="course-info">
                                <h3>Certified Scrum Master</h3>
                                <p>Course CSM certified by Scrum Alliance.</p>
                            </div>

                            <div className="course-info">
                                <h3>Certified Scrum Product Owner</h3>
                                <p>Course CSPO certified by Scrum Alliance.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CoursesComponent;