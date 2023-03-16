import "./nav.css";
import React, { useState } from "react";
import styled from "styled-components";
import BurgerButtonNav from "./BurgeButton/BurgerButton";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";


const Nav = () => {

    const [ clicked, setClicked ] = useState(false);

    const handleClick = () => {
      setClicked(!clicked)
    }

    const scrollToContacto = () => {
      scroll.scrollTo(document.getElementById("contacto").offsetTop);
    };
  
    const scrollToAboutMe = () => {
        scroll.scrollTo(document.getElementById("aboutme").offsetTop);
    };

    const scrollToKnowledge = () => {
        scroll.scrollTo(document.getElementById("Knowledge").offsetTop);
    };
    
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



    const handleClickContacto = () => {
        scrollToContacto();
    }
  
    const handleClickContacto2 = () => {
          scrollToContacto();
          handleClick()
    }


    return(
        <div>
            <NavBar>
                <div className={`links ${ clicked ? 'active' : '' }`}>
                    
                    {window.innerWidth <= 790 ? 
                     (  
                    <div> 
                        <a onClick={handleClick} href="/">Home</a>

                        <a onClick={handleClickAboutMe2} >About Me</a>

                        <a onClick={handleClickKnowledge2} >Knowledge</a>

                        <a onClick={handleClick} >Projects</a>

                        <a onClick={handleClick} >Courses</a>

                        <a onClick={handleClick} >Experience</a>

                        <a onClick={handleClick} >Hobbies</a>
                        
                        <Link className="contact" onClick={handleClickContacto2}  to="" >
                            <a href="/">Contact</a>
                        </Link>
                    </div>      
                        ) : (
                    <div>
                        <a href="/">Home</a>

                        <a onClick={handleClickAboutMe} >About Me</a>

                        <a onClick={ handleClickKnowledge }>Knowledge</a>
                        
                        <a >Projects</a>

                        <a >Courses</a>

                        <a >Experience</a>

                        <a >Hobbies</a>

                        <Link onClick={handleClickContacto}  to="" >
                            <a>Contact</a>
                        </Link>
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
    background-color: rgba(110, 110, 110, 0.208);
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