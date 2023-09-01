import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function SiteChange({change}) {
    const user_id = change.adminUser_id
    const item_id = change.menuItem_id
    const [username, setUsername] = useState("")
    const [itemName, setItemName] = useState("")

    useEffect(() => {
    fetch(`/menuitems/${item_id}`)
        .then((resp) => resp.json())
        .then((data) => {
            setItemName(data.name)
        })
    }, [])

    useEffect(() => {
    fetch(`/adminusers/${user_id}`)
        .then((resp) => resp.json())
        .then((data) => {
            setUsername(data.username)
        })
    }, [])

    return (
        <div className="sitechange">
            <p>{change.action} by {username} on {itemName} at {change.created_at}</p>
        </div>
    )
}

export default SiteChange