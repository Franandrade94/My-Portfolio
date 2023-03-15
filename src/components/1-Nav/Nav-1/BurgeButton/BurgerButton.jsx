import React from "react";
import styled from "styled-components";

function BurgerButtonNav(props) {
    return(

        <Burguer>
            <div onClick={props.handleClick} className={`icon nav-icon-5 ${props.clicked ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </Burguer>
    )
}

export default BurgerButtonNav;

const Burguer = styled.div `
.nav-icon-5{
    width: 30px;
    height:10px;
    margin: 10px -8px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    z-index: 4;
  }
  .nav-icon-5 span{
    background-color: white;
    position: absolute;
    border-radius: 2px;
    transition: .3s cubic-bezier(.8, .5, .2, 1.4);
    width:100%;
    height: 4px;
    transition-duration: 500ms
  }
  .nav-icon-5 span:nth-child(1){
    top:0px;
    left: 0px;
  }
  .nav-icon-5 span:nth-child(2){
    top:13px;
    left: 0px;
    opacity:1;
  }
  .nav-icon-5 span:nth-child(3){
    bottom:0px;
    left: 0px;
  }
  .nav-icon-5.open span:nth-child(1){
    transform: rotate(45deg);
    top: 10px;
  }
  .nav-icon-5.open span:nth-child(2){
    opacity:0;
  }
  .nav-icon-5.open span:nth-child(3){
    transform: rotate(-45deg);
    top: 10px;
`