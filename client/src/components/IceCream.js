import React, {useState} from "react";
import MenuItem from "./MenuItem";

function IceCream({visibleMenuitems}){
    const icecream = visibleMenuitems.filter((item) => {
        return item.type == "Ice Cream"
    })

    const mappedIcecream = icecream.map((item) => {
        return (
            <MenuItem key={item.id} item={item} />
        )
    })

    return (
        <div className="icecream-list">
            <h1>Ice Cream</h1> 
            <div className="icecream">
                <h2>Flavors</h2>
                <ul className="icecreamFlavors">
                    {mappedIcecream}
                </ul>
            </div>
        </div>
    )
}

export default IceCream