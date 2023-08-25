import React, { useEffect, useState, useContext } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { UserProvider } from "../context/user";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Menu from "./Menu";
import SpecialOrder from "./SpecialOrder";
import ContactUs from "./ContactUs";
import Login from "./Login";

function App() {
    const [menuitems, setMenuitems] = useState([])

    return (
      <div>
        <nav>

        </nav>

        <div>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/aboutus' element={<AboutUs />}></Route>
            <Route path='/menu' element={<Menu />}></Route>
            <Route path='/specialorder' element={<SpecialOrder />}></Route>
            <Route path='/contactus' element={<ContactUs />}></Route>
            <Route path='/countrydonutzlogintoedit' element={<Login />}></Route>
          </Routes>
        </div>
      </div>
    )
}

export default App;
