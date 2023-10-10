import React, {useState} from "react";
import MenuItem from "./MenuItem";
import Navbar from "./Navbar";
import Drinks from "./Drinks";
import Donuts from "./Donuts";
import IceCream from "./IceCream";

function Menu({menuitems}){
    const visibleMenuitems = menuitems.filter((menuitem) => {
        return menuitem.visible == "true"
    })
    
    

    

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
        <div className="menu">
            <Navbar />
            <h1>Donuts</h1>
            <div className="donuts">
                <h2>Yeast-Raised</h2>
                <ul className="yeast">
                    {mappedYeast}
                </ul>
                <h2>Cake</h2>
                <ul className="cake">
                    {mappedCake}
                </ul>
                <h2>Old-Fashioned</h2>
                <ul className="old">
                    {mappedOld}
                </ul>
                <h2>Buttermild Bar</h2>
                <ul className="buttermilk">
                    {mappedButtermilk}
                </ul>
                <h2>Filled</h2>
                <ul className="filled">
                    {mappedFilled}
                </ul>
                <p>Filling Flavors: Custard, Vanilla, Chocolate, Raspberry, Strawberry, and Lemon </p>
                <h2>Long John</h2>
                <ul className="long">
                    {mappedLong}
                </ul>
                <h2>Specialty</h2>
                <ul className="specialty">
                    {mappedSpecialty}
                </ul>
                <h2>Donut Holes</h2>
                <ul className="holes">
                    {mappedHoles}
                </ul>
            </div>
            <h1>Ice Cream</h1> 
            <div className="icecream">
                <h2>Flavors</h2>
                <ul className="icecreamFlavors">
                    {mappedIcecream}
                </ul>
            </div>
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

export default Menu