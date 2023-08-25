import React, {useState} from "react";

function Login(){

}

export default Login

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
          resp.json().then((user) => setUser(user));
        }
      });
}

function handleLogout() {
    fetch("/logout", {
        method: "DELETE"
    }).then(setUser(null))
}

return (
    <>
        <h1>Login Form</h1>
        <form onSubmit = {handleLogin}>
            <label>Username: </label>
            <input id = "username" type = "text" />
            <button type = "submit">Login</button>
        </form>

        <h1>Logout Form</h1>
        <button onClick = {handleLogout}>Logout</button>

        <br />

        <button onClick = {handleCheckSession}>Check Session</button>
    </>
)