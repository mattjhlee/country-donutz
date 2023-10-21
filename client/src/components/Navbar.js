import React from "react";
import { Link } from "react-router-dom";
import logo from "../resources/images/CD-logo.PNG"

function Navbar(){
    return (
        <nav>
            <div>
                <img src={logo} alt="country-donutz-logo"/>
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