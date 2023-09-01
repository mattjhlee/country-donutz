import React, {useState} from "react";
import Navbar from "./Navbar";

function AboutUs(){
    return (
        <div className="aboutus">
            <Navbar />
            <img className="about"src="https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/66269181_679049705923348_3870785231946514432_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Gsvi8Ack-LUAX85Y6j1&_nc_ht=scontent-atl3-2.xx&oh=00_AfAsIzfKX05pYXwL8enhSJFvIGn6F3tPe8EZVa1B5xliYg&oe=651906EC" />
            <p>Our story began in 2017, when the owner Reggie Earl and his nephew Lang Leng decided to invest in a small family business. As a Cambodian refugee, Reggie had to immigrate to America in order to support his family. Reggie resided in Long Beach, California, and noticed the many Cambodian-owned donut shops scattered throughout Southern California. Reggie then got inspired to open his own donut shop on the east coast located in Salisbury, North Carolina.</p>
            <img className="about"src="https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/32592231_430444250783896_7679238372325326848_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_ohc=ppDrGGDBZjQAX98GiOz&_nc_ht=scontent-atl3-2.xx&oh=00_AfABNpqyaz4Zk0066ORLEtDYioG-L-8Bj8rDZqvBoq8eFQ&oe=65191E21"/>
            <p>Reggie Earl wants to bring daily fresh doughnuts and a taste of the Southern California atmosphere to his local shop, but what is that exactly? It’s the bright pink boxes combined with the boba drinks. So far, the pink box is a symbol of doughnuts typically found in Los Angeles, a city that has become an epicenter of doughnut culture in recent decades; Reggie is hoping that it will catch on in North Carolina. </p>
        </div>
    )
}

export default AboutUs