import React, {useState} from "react";
import MenuItem from "./MenuItem";
import Navbar from "./Navbar";

function Menu({menuitems}){
    const visibleMenuitems = menuitems.filter((menuitem) => {
        return menuitem.visible == "true"
    })
    
    const yeast = visibleMenuitems.filter((item) => {
        return item.type == "Yeast-Raised Donuts"
    })

    const mappedYeast = yeast.map((item) => {
        return (
            <MenuItem key={item.id} item={item} />
        )
    })

    const cake = visibleMenuitems.filter((item) => {
        return item.type == "Cake Donuts"
    })

    const mappedCake = cake.map((item) => {
        return (
            <MenuItem key={item.id} item={item} />
        )
    })

    const old = visibleMenuitems.filter((item) => {
        return item.type == "Old Fashioned Donuts"
    })

    const mappedOld = old.map((item) => {
        return (
            <MenuItem key={item.id} item={item} />
        )
    })

    const buttermilk = visibleMenuitems.filter((item) => {
        return item.type == "Buttermilk Bar Donuts"
    })

    const mappedButtermilk = buttermilk.map((item) => {
        return (
            <MenuItem key={item.id} item={item} />
        )
    })

    const filled = visibleMenuitems.filter((item) => {
        return item.type == "Filled Donuts"
    })

    const mappedFilled = filled.map((item) => {
        return (
            <MenuItem key={item.id} item={item} />
        )
    })

    const long = visibleMenuitems.filter((item) => {
        return item.type == "Long John Donuts"
    })

    const mappedLong = long.map((item) => {
        return (
            <MenuItem key={item.id} item={item} />
        )
    })

    const specialty = visibleMenuitems.filter((item) => {
        return item.type == "Specialty Donuts"
    })

    const mappedSpecialty = specialty.map((item) => {
        return (
            <MenuItem key={item.id} item={item} />
        )
    })

    const holes = visibleMenuitems.filter((item) => {
        return item.type == "Donut Holes"
    })

    const mappedHoles = holes.map((item) => {
        return (
            <MenuItem key={item.id} item={item} />
        )
    })

    const icecream = visibleMenuitems.filter((item) => {
        return item.type == "Ice Cream"
    })

    const mappedIcecream = icecream.map((item) => {
        return (
            <MenuItem key={item.id} item={item} />
        )
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