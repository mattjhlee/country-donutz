import React, { useEffect, useState, useContext } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Menu from "./Menu";
import SpecialOrder from "./SpecialOrder";
import ContactUs from "./ContactUs";
import Login from "./Login";
import Edit from "./Edit";
import ViewOrders from "./ViewOrders";
import { UserContext } from "../context/user";

function App() {
    const [menuitems, setMenuitems] = useState([])
    const { user, setUser } = useContext(UserContext);
    const [specialOrders, setSpecialOrders] = useState([])

    useEffect(() => {
      fetch("/specialorders")
        .then((resp) => resp.json())
        .then((data) => {
          setSpecialOrders(data)
        })
    }, [])

    useEffect(() => {
      fetch("/menuitems")
        .then((resp) => resp.json())
        .then((data) => {
          setMenuitems(data)
        })
    }, [])

    function fetchData() {
      fetch("/menuitems")
        .then((resp) => resp.json())
        .then((data) => {
          setMenuitems(data)
        })
    }

    return (
      <div>
        <nav>

        </nav>

        <div>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/aboutus' element={<AboutUs />}></Route>
            <Route path='/menu' element={<Menu menuitems={menuitems} />}></Route>
            <Route path='/specialorder' element={<SpecialOrder specialOrders={specialOrders} setSpecialOrders={setSpecialOrders}/>}></Route>
            <Route path='/contactus' element={<ContactUs />}></Route>
            <Route path='/countrydonutzlogin' element={<Login />}></Route>
            <Route path='/countrydonutzedit' element={<Edit menuitems={menuitems} setMenuitems={setMenuitems} fetchData={fetchData} />}> </Route>
            <Route path="/viewspecialorders" element={<ViewOrders user={user} specialOrders={specialOrders}/>} ></Route>
          </Routes>
        </div>
      </div>
    )
}

export default App;
