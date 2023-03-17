import "./home.css";
import React from "react";
import Presentacion from "../../components/2-Presentación/Presentación";
import Nav from "../../components/1-Nav/Nav-1/Nav";

const  Home = () => {

    return(
        <div className="Home">
            <div className="Nav-Page">
                <Nav/>
            </div>
            <Presentacion/>
        </div>
    )
}

export default Home;