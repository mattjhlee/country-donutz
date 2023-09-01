import React, { useEffect } from "react";
import { useState } from "react";

function EditItems({item, user, setMenuItems, fetchData, siteChanges, setSiteChanges}) {
    const id = item.id

    const [name, setName] = useState(item.name)
    const [price, setPrice] = useState(item.price)
    const [deleted, setDeleted] = useState(false)
    

    function handleNameChange(e) {
        e.preventDefault()

        fetch(`/menuitems/${id}`, {
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: name})
        })
        .then(resp => resp.json())
        fetchData()

        const newChange = {
            action: "Item Name Change",
            created_at: new Date().toString(),
            adminUser_id: user.id,
            menuItem_id: item.id
        }

        fetch('/sitechanges', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newChange)
        })
        .then(resp => resp.json())
        .then((newChange) => setSiteChanges([...siteChanges, newChange]))
    }

    function handlePriceChange(e) {
        e.preventDefault()
        fetch(`/menuitems/${id}`, {
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({price: price})
        })
        .then(resp => resp.json())
        fetchData()

        const newChange = {
            action: "Item Price Change",
            created_at: new Date().toString(),
            adminUser_id: user.id,
            menuItem_id: item.id
        }

        fetch('/sitechanges', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newChange)
        })
        .then(resp => resp.json())
        .then((newChange) => setSiteChanges([...siteChanges, newChange]))
    }

    function handleDelete(e) {
        e.preventDefault()
        fetch(`/menuitems/${id}`, {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        fetchData()

        const newChange = {
            action: item.name + " Deleted",
            created_at: new Date().toString(),
            adminUser_id: user.id,
            menuItem_id: item.id
        }

        fetch('/sitechanges', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newChange)
        })
        .then(resp => resp.json())
        .then((newChange) => setSiteChanges([...siteChanges, newChange]))
    }
    
    return (
        <div className="edititems">
            <form onSubmit = {handleNameChange}>
                <label>Item Name: </label>
                <input id = "name" type = "text" value={name} onChange={(e) => setName(e.target.value)}/>
                <button type = "submit">Change Name</button>
            </form>
            <form onSubmit = {handlePriceChange}>
                <label>Item Price: $</label>
                <input id = "price" type = "text" value={price} onChange={(e) => setPrice(e.target.value)}/>
                <button type = "submit">Change Price</button>
            </form>
            <button onClick={handleDelete}>Delete</button>
            <div className="sitechanges">

            </div>
        </div>
    )
}

export default EditItems