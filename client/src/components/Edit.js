import React, {useState} from "react";
import { UserContext } from "../context/user";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import EditItems from "./EditItems";
import { useEffect } from "react";
import SiteChange from "./SiteChange";

function Edit({menuitems, setMenuitems, fetchData}) {
    const { user, setUser } = useContext(UserContext);
    const [siteChanges, setSiteChanges] = useState([])
    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [price, setPrice] = useState("")

    const navigate = useNavigate()

    const mappedItems = menuitems.map((item) => {
        return (
            <EditItems key={item.id} item={item} user={user} 
            setMenuitems={setMenuitems} fetchData={fetchData}
            siteChanges={siteChanges} setSiteChanges={setSiteChanges}/>
        )
    })

    useEffect(() => {
        fetch('/sitechanges')
            .then((resp) => resp.json())
            .then((data) => {
                setSiteChanges(data)
            })
    }, [])

    const mappedSiteChanges = siteChanges.map((change) => {
        return (
            <SiteChange key={change.id} change={change} />
        )
    })

    function handleLogout() {
        fetch("/logout", {
            method: "DELETE"
        }).then(setUser(null))
        navigate('/')
    }

    function handleSubmit(e) {
        e.preventDefault()
        const newItem = {
            name: name,
            type: type,
            price: price.toString(),
            img: "",
            body: "",
            visible: "true"
        }

        fetch('/menuitems', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newItem)
        })
        .then(resp => resp.json())
        .then((newItem) => {
            setMenuitems([...menuitems, newItem])
        })
    }

    function goToOrders() {
        navigate('/viewspecialorders')
    }

    if (user) {
        return (
            <div className="edit">
                <Navbar />
                <button onClick={goToOrders}>View Special Orders</button>
                {mappedItems}
                <div className="form">
                    <h3>Add a New Menu Item</h3>
                    <form id="add-item-form" onSubmit={handleSubmit}>
                        <label>Name: </label>
                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} /> <br /> 
                        <label>Item Type: </label>
                        <input type="text" name="type" value={type} onChange={(e) => setType(e.target.value)} /> <br />
                        <label>Price: </label>
                        <input type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)} /> <br />
                        <button type="submit">Submit</button>
                    </form>
                </div>
                {mappedSiteChanges}                
                <button onClick = {handleLogout}>Logout</button>
            </div>
        )
    } else {
        return (
            <div className="nouser">
                <Navbar />
                <h2>Must Be Logged In To Edit</h2>
                <Link to="/countrydonutzlogin">
                    <span className="login-link">
                    <button>Log In</button>
                    </span>
                </Link>
            </div>
        )
    }
}

export default Edit