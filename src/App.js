import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./nav";

function App() {
    const [message, setMessage] = useState([]);

    useEffect(() => {
        (async function getUser() {
            console.log("use effect");
            let users = await axios.get("http://localhost:8080/users");
            console.log("getUser - users:", users.data);
            setMessage(users.data);
        })();
    }, []);

    return (
        <div className="App">
            <Nav />
            <header className="App-header">
                new react app
                <div>
                    {message.map((user) => {
                        console.log("user");
                        return (
                            <>
                                <ul key={user.id}>
                                    <li>user: {user.username}</li>
                                    <li>password: {user.password}</li>
                                    <li>age: {user.age}</li>
                                    <li>email: {user.email}</li>
                                </ul>
                                <div></div>
                            </>
                        );
                    })}
                </div>
            </header>
        </div>
    );
}

export default App;
