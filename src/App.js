import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        console.log("use effect");
        fetch("http://localhost:8080/message")
            .then((res) => res.json())
            .then((data) => setMessage(data.message));
    }, [message]);

    return (
        <div className="App">
            <header className="App-header">
                new react app
                <div>{message}</div>
            </header>
        </div>
    );
}

export default App;
