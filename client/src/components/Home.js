import React, {useState} from "react";
import Navbar from "./Navbar";

function Home(){
    return (
        <div className="home">
            <Navbar />
            <h1>MADE FRESH DAILY.... BIGGER BETTER DONUTS!</h1>
            <img className="home-image" src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.6435-9/68635931_701377623690556_9126970465103904768_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=8pv7tp4qbTcAX9C6X95&_nc_ht=scontent-atl3-1.xx&oh=00_AfCAXqSLyJZ_BEi-Y_sMnIipCY4n3KBI1Jmcadw-SLmdzA&oe=651915A8" />
        </div>
    )
}

export default Home