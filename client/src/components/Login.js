import React, {useState} from "react";
import { UserContext } from "../context/user";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Login(){
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate()

  function handleCheckSession() {
    fetch("/check_session").then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => setUser(user));
      }
    });
  }

  function handleLogin(e) {
    e.preventDefault();

    let username = e.target.username.value;

    fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify( { username } ),
      }).then((resp) => {
        if (resp.ok) {
          resp.json().then((user) => {
            setUser(user)
            navigate('/countrydonutzedit')
          })
        }
      });
  }

  return (
    <>
      <div className="login">
        <Navbar />
        <h1>Login</h1>
        <form onSubmit = {handleLogin}>
            <label>Username: </label>
            <input id = "username" type = "text" />
            <button type = "submit">Login</button>
        </form>
      </div>
    </>
  )
}

export default Login