import "./nav.css";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BurgerButtonNav from "./BurgeButton/BurgerButton";
import { animateScroll as scroll } from "react-scroll";



const Nav = () => {

    const [ clicked, setClicked ] = useState(false);
    const [currentSection, setCurrentSection] = useState("Home");


    //---------- NAVBAR SECTION INDICATOR ----------

    useEffect(() => {
        const handleScroll = () => {
          const homeSection = document.getElementById("Home");
          const aboutMeSection = document.getElementById("aboutme");
          const knowledgeSection = document.getElementById("Knowledge");
          const projectsSection = document.getElementById("projects");
          const experienceSection = document.getElementById("experiences");
          const coursesSection = document.getElementById("courses");
          const contactSection = document.getElementById("contacto");
      
          console.log(knowledgeSection.offsetTop, "Soy Console Log");

          if (
            window.pageYOffset >= homeSection.offsetTop &&
            window.pageYOffset < aboutMeSection.offsetTop
          ) {
            setCurrentSection("Home");
          } else if (
            window.pageYOffset >= aboutMeSection.offsetTop &&
            window.pageYOffset < knowledgeSection.offsetTop
          ) {
            setCurrentSection("aboutme");
          } else if (
            window.pageYOffset >= knowledgeSection.offsetTop &&
            window.pageYOffset < projectsSection.offsetTop
          ) {
            setCurrentSection("Knowledge");
          } else if (
            window.pageYOffset >= projectsSection.offsetTop &&
            window.pageYOffset < experienceSection.offsetTop
            ){
             setCurrentSection("projects");
          }else if (
            window.pageYOffset >= experienceSection.offsetTop &&
            window.pageYOffset < coursesSection.offsetTop){
              setCurrentSection("experiences");
            }else if(window.pageYOffset >= coursesSection.offsetTop &&
            window.pageYOffset < contactSection.offsetTop)
            {
              setCurrentSection("courses");
            }else if (window.pageYOffset >= coursesSection.offsetTop){
              setCurrentSection("contacto")
            }
        };
      
        window.addEventListener("scroll", handleScroll);
      
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

    //---------- SCROLL TO ----------

    const handleClick = () => {
      setClicked(!clicked)
    }

    const scrollToHome = () => {
        scroll.scrollTo(document.getElementById("Home").offsetTop);
      };
 
    const scrollToAboutMe = () => {
        scroll.scrollTo(document.getElementById("aboutme").offsetTop);
    };

    const scrollToKnowledge = () => {
        scroll.scrollTo(document.getElementById("Knowledge").offsetTop);
    };

    const scrollToProjects = () => {
      scroll.scrollTo(document.getElementById("projects").offsetTop);
    };

    const scrollToExperiences = () => {
      scroll.scrollTo(document.getElementById("experiences").offsetTop);
    };

    const scrollToCourses = () => {
      scroll.scrollTo(document.getElementById("courses").offsetTop);
    };

    const scrollToContacto = () => {
        scroll.scrollTo(document.getElementById("contacto").offsetTop);
    };
    

    const handleClickHome = () => {
        scrollToHome();
    }

    const handleClickHome2 = () => {
        scrollToHome();
        handleClick()
    }

    const handleClickAboutMe = () => {
        scrollToAboutMe();
    }

    const handleClickAboutMe2 = () => {
        scrollToAboutMe();
        handleClick()
    }

    const handleClickKnowledge = () => {
        scrollToKnowledge();
    }

    const handleClickKnowledge2 = () => {
        scrollToKnowledge();
        handleClick()
    }

    const handleClickProjects = () => {
      scrollToProjects();
    }

    const handleClickProjects2 = () => {
      scrollToProjects();
      handleClick()
    }

    const handleClickExperiences = () => {
      scrollToExperiences();
    }

    const handleClickExperiences2 = () => {
      scrollToExperiences();
      handleClick()
    }

    const handleClickCourses = () => {
      scrollToCourses();
    }

    const handleClickCourses2 = () => {
      scrollToCourses();
      handleClick()
    }

    const handleClickContacto = () => {
      scrollToContacto();
    }
  
    const handleClickContacto2 = () => {
      scrollToContacto();
      handleClick()
    }

    return(
        <div id="Home">
            <NavBar>
                <div className={`links ${ clicked ? 'active' : '' }`}>
                    
                    {window.innerWidth <= 790 ? 
                     (  
                    <div> 
                      <a onClick={handleClickHome2}> Home </a>
                      <a onClick={handleClickAboutMe2}> About Me </a>
                      <a onClick={handleClickKnowledge2}> Knowledge </a>
                      <a onClick={handleClickProjects2}>Projects</a>
                      <a onClick={handleClickExperiences2}>Experience</a>
                      <a onClick={handleClickCourses2}>Courses</a>
                      <a onClick={handleClickContacto2}> Contact </a>
                    </div>      
                        ) : (
                    <div>
                      <a
                        onClick={handleClickHome}
                        className={currentSection === "Home" ? "current" : ""}
                      >
                        Home
                      </a>

                      <a
                        onClick={handleClickAboutMe}
                        className={currentSection === "aboutme" ? "current" : ""}
                      >
                        About Me
                      </a>

                      <a
                        onClick={handleClickKnowledge}
                        className={currentSection === "Knowledge" ? "current" : ""}
                      >
                        Knowledge
                      </a>

                      <a
                        onClick={handleClickProjects}
                        className={currentSection === "projects" ? "current" : ""}
                      >
                        Projects
                      </a>

                      <a
                        onClick={handleClickExperiences}
                        className={currentSection === "experiences" ? "current" : ""}
                      >
                        Experience
                      </a>

                      <a
                        onClick={handleClickCourses}
                        className={currentSection === "courses" ? "current" : ""}
                      >
                        Courses
                      </a>
                                            
                      <a
                        onClick={handleClickContacto}
                        className={currentSection === "contacto" ? "current" : ""}
                      >
                      Contact
                      </a>
                    </div>)
                    }
                    
                </div>
                <div className="Burguer">
                    <BurgerButtonNav clicked={clicked} handleClick={handleClick}/>
                </div> 
                <BgDiv className={`initial ${ clicked ? 'active' : '' }`}> </BgDiv>
            </NavBar>
        </div>
    )
};

export default Nav;

const NavBar = styled.nav`
    
    padding: .8rem;
    display: flex;
    align-items: center;

    a{
        color: white;
        text-decoration: none;
        margin-right: 2rem;
    }

    .links{
        position: absolute;
        top: -7000%;
        left: -20000%;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        text-align: left;
        z-index: 2;
        a{
            color: white;
            font-size: 17px;
            display: block;
        }

        
        @media(min-width: 790px){
            position: initial;
            margin: auto;
            a{
                font-size: 18px;
                color: white;
                display: inline;

                &:hover{
                    color: rgb(190, 190, 190); 
                }
            }
        }
    }

    .links.active{
        width: 100%;
        display: block;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        padding: 20%;
        top: 0;
        left: 0;
        right: 0;
        text-align: center;
        backdrop-filter: blur(1rem);
        height: auto;
        a{
            font-size: 20px;
            margin-top: 1rem;
            color: white;

            &:hover{
                color: rgb(190, 190, 190); 
            }
        }
    }

    .Burguer{
        @media(min-width: 790px){
            display: none;
        }
    }
`

const BgDiv = styled.div`
    position: absolute;
    background-color: rgba(110, 110, 110, .350);
    top: -7000%;
    left: -20000%;
    width: 100%;
    height: 100%;
    z-index: 1;

    &.active{
        width: 100%;
        height: auto;
        top: 0;
        left: 0;
    }
`