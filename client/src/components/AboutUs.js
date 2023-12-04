import React, {useState} from "react";
import Navbar from "./Navbar";
import grand_opening from "../resources/images/grand-opening.jpg";
import grand_opening2 from "../resources/images/grand-opening2.jpg";


function AboutUs(){
    return (
        <div className="aboutus">
            <Navbar />
            <img className="about"src={grand_opening} />
            <p>Our story began in 2017, when the owner Reggie Earl and his nephew Lang Leng decided to invest in a small family business. As a Cambodian refugee, Reggie had to immigrate to America in order to support his family. Reggie resided in Long Beach, California, and noticed the many Cambodian-owned donut shops scattered throughout Southern California. Reggie then got inspired to open his own donut shop on the east coast located in Salisbury, North Carolina.</p>
            <img className="about"src={grand_opening2} />
            <p>Reggie Earl wants to bring daily fresh doughnuts and a taste of the Southern California atmosphere to his local shop, but what is that exactly? It’s the bright pink boxes combined with the boba drinks. So far, the pink box is a symbol of doughnuts typically found in Los Angeles, a city that has become an epicenter of doughnut culture in recent decades; Reggie is hoping that it will catch on in North Carolina. </p>
        </div>
    )
}

export default AboutUs