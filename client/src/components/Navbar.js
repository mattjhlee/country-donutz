import React, {useState} from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return (
        <nav>
            <div>
                <img src="https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/299161872_735200427931419_1534182003343956430_n.png?_nc_cat=106&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=A4xpYdKwlJwAX9ttdrA&_nc_ht=scontent-atl3-1.xx&oh=00_AfAr2GYyD4angmtuaq-7aG7AxLZNJ-rfctNgAiO5KodFZw&oe=64F55F09" />
                <Link to="/">
                    <span className="home-link">
                    <h3>Home</h3>
                    </span>
                </Link>
                <Link to="/menu">
                    <span className="menu-link">
                    <h3>Menu</h3>
                    </span>
                </Link>
                <Link to="/specialorder">
                    <span className="specialorder-link">
                    <h3>Special Orders</h3>
                    </span>
                </Link>
                <Link to="/aboutus">
                    <span className="about-link">
                    <h3>About Us</h3>
                    </span>
                </Link>
                <Link to="/contactus">
                    <span className="contact-link">
                    <h3>Contact Us</h3>
                    </span>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar