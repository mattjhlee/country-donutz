import React from "react";

function Order({order}) {
    return (
        <li className="order">
                <h3>{order.name}</h3>
                <h3>{order.email}</h3>
                <h3>{order.phone}</h3>
                <p>{order.addinfo}</p>
        </li>
    )
}

export default Order