import "./App.css";
import React, { useState, useEffect } from "react";
//
import Admin from "./components/Admin";
import Guest from "./components/Guest";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:7000/users")
      .then((res) => res.json())
      .then((data) => setMsg(data.msg));
  }, []);

  return (
    <div id="app">
      <h1>Welcome Three Dots!</h1>
      <pre>{msg}</pre>
      <div>
        <div>
          <Admin />
        </div>
        <div>
          <Guest />
        </div>
      </div>
    </div>
  );
}

export default App;
