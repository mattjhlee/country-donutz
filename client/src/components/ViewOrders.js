import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Order from "./Order";

function ViewOrders({user, specialOrders}) {
    const mappedOrders = specialOrders.map((order) => {
        return (
            <Order key={order.id} order={order} />
        )
    })

    if (user) {
        return (
            <div className="vieworders">
                <Navbar />
                <ul>
                {mappedOrders}
                </ul>
            </div>
        )
    } else {
        return (
            <div className="nouser">
                <Navbar />
                <h2>Must Be Logged In To Edit</h2>
                <Link to="/countrydonutzlogin">
                    <span className="login-link">
                    <button>Log In</button>
                    </span>
                </Link>
            </div>
        )
    }
}

export default ViewOrders