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

    return (
        <div className="drinks-list">
            <h1>Drinks</h1> 
            <div className="drinks">
                <h2>Hot Drinks</h2>
                <ul className="hotdrinks">
                    {mappedHotDrinks}
                </ul>
                <h2>Boba</h2>
                <ul className="boba">
                    {mappedBoba}
                </ul>
            </div>
        </div>
    )
}

export default Drinks