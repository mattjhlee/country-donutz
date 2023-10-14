import React, {useState} from "react";
import MenuItem from "./MenuItem";

function Donuts({visibleMenuitems}){
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

    return (
        <div className="donuts-list">
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
                    <h2>Buttermilk Bar</h2>
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
            </div>
    )
}

export default Donuts