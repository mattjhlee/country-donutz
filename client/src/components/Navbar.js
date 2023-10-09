import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return (
        <nav>
            <div>
                <img src="https://thumbnails-photos.amazon.com/v1/thumbnail/dOVqWCLYR66BnOlv3sMTsg?ownerId=ARF2223FKVU8Q&viewBox=700&groupShareToken=VUJ6gukiRfuFU6UT1NyQng.TdBLcHOVMBSv4EcluJMbfP" />
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