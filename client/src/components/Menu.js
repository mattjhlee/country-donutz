import React from "react";
import Navbar from "./Navbar";
import Drinks from "./Drinks";
import Donuts from "./Donuts";
import IceCream from "./IceCream";

function Menu({menuitems}){
    const visibleMenuitems = menuitems.filter((menuitem) => {
        return menuitem.visible === "true"
    })

    return (
        <div className="menu">
            <Navbar />
            <Donuts visibleMenuitems={visibleMenuitems} />
            <Drinks visibleMenuitems={visibleMenuitems} />
            <IceCream visibleMenuitems={visibleMenuitems} />
        </div>

    )
}

export default Menu