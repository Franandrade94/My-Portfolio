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
  
    const handleClickContacto = () => {
      scrollToContacto();
      
    }



    return(
        <>
            <NavBar>
                <div className={`links ${ clicked ? 'active' : '' }`}>
                    
                    {window.innerWidth <= 790 ? 
                     (  
                    <div> 
                        <a onClick={handleClick} href="/">Home</a>

                        <a onClick={handleClick} href="/resume">Resume</a>

                        <a onClick={handleClick} href="/project">Projects</a>

                        <a onClick={handleClick} href="/courses">Courses</a>

                        <a onClick={handleClick} href="/expercience">Experience</a>

                        <a onClick={handleClick} href="/knowledge">Knowledge</a>

                        <a onClick={handleClick} href="/hobbies">Hobbies</a>
                        
                        <Link className="contact" onClick={handleClickContacto}  to="" >
                            <a href="/">Contact</a>
                        </Link>
                    </div>      
                        ) : (
                    <div>
                        <a href="/">Home</a>

                        <a href="/resume">Resume</a>

                        <a href="/projects">Projects</a>

                        <a href="/courses">Courses</a>

                        <a href="/expercience">Experience</a>

                        <a href="/knowledge">Knowledge</a>

                        <a href="/hobbies">Hobbies</a>

                        <Link onClick={handleClickContacto}  to="" >
                            <a href="/">Contact</a>
                        </Link>
                      </div>)
                    }
                    
                </div>
                <div className="Burguer">
                    <BurgerButtonNav clicked={clicked} handleClick={handleClick}/>
                </div> 
                <BgDiv className={`initial ${ clicked ? 'active' : '' }`}> </BgDiv>
            </NavBar>
        </>
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
        top: 10%;
        left: 0;
        right: 0;
        text-align: center;
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
    backdrop-filter: blur(1rem);
    top: -7000%;
    left: -20000%;
    width: 100%;
    height: 100%;
    z-index: 1;

    &.active{
        width: 100%;
        height: 70%;
        top: 0;
        left: 0;
    }
`