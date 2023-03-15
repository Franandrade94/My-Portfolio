import "./home.css";
import React from "react";
import Nav from "../../components/1-Nav/Nav-1/Nav";
import Presentacion from "../../components/2-Presentación/Presentación";

const  Home = () => {

    return(
        <div className="Home">
            <Nav/>
            <Presentacion/>
        </div>
    )
}

export default Home;