import React from "react";

function MenuItem({item}) {
    const name = item.name
    const price = "$" + item.price

    return (
        <li className="menuitem">
            <div>
                <h3>{name}</h3>
                <h3>{price}</h3>
            </div>
        </li>
    )
}

export default MenuItem