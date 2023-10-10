import React, {useState} from "react";
import MenuItem from "./MenuItem";

function Drinks({visibleMenuitems}){
    const hotDrinks = visibleMenuitems.filter((item) => {
        return item.type == "Hot Drinks"
    })

    const mappedHotDrinks = hotDrinks.map((item) => {
        return (
            <MenuItem key={item.id} item={item} />
        )
    })

    const boba = visibleMenuitems.filter((item) => {
        return item.type == "Boba"
    })

    const mappedBoba = boba.map((item) => {
        return (
            <MenuItem key={item.id} item={item} />
        )
    })
}

export default Drinks