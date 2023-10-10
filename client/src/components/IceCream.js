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
}

export default IceCream