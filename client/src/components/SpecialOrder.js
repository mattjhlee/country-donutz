import React, {useState} from "react";
import Navbar from "./Navbar";

function SpecialOrder({specialOrders, setSpecialOrders}){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [addinfo, setAddInfo] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        const newOrder = {
            name: name,
            email: email,
            phone: phone,
            quantity: null,
            addinfo: addinfo,
            created_at: new Date().toString(),
            completed: "false",
            menuItem_id: null
        }

        fetch('/specialorders' , {
            method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newOrder)
            })
                .then(resp => resp.json())
                .then((newOrder) => {
                    setSpecialOrders([...specialOrders, newOrder])
                    console.log(specialOrders)
                })
    }

    return (
        <div className="specialorder">
            <Navbar />
            <h1>DONUTZ DONUTZ DONUTZ</h1>
            <h2>Need to place a large order of donutz for a special occasion?</h2>
            <h2>Special orders are baked fresh on the day of pick up!</h2>
            <p>Custom orders must be placed 48 hours prior to date of pick up. Confirmation of your order will be emailed to you within 24 hours of placement. Please fill out the form below to secure your delicious, fresh donutz!</p>
            <form className="orderform" onSubmit={handleSubmit}>
                <label>Your Name: </label>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} /> <br />
                <label>Email Address: </label>
                <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
                <label>Phone Number: </label>
                <input type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} /> <br />
                <p>Please provide order details below. Include date and time of preferred pickup, donutz desired, and quantity.</p>
                <textarea type="text" name="addinfo" rows="5" cols="50" value={addinfo} onChange={(e) => setAddInfo(e.target.value)}/> <br />
                <button type="submit">Place Order</button>
            </form>
        </div>
    )
}

export default SpecialOrder