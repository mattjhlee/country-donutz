import React from "react";
import Navbar from "./Navbar";
import donuts_pic from "../resources/images/donuts-closeup.jpg"

function Home(){
    return (
        <div className="home">
            <Navbar />
            <h1>MADE FRESH DAILY.... BIGGER BETTER DONUTS!</h1>
            <img className="home-image" alt="home" src={donuts_pic} />
        </div>
    )
}

export default Home