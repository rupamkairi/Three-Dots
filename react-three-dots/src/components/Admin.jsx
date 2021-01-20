import React, { useEffect, useState } from "react";
//
import io from "socket.io-client";

export default function Admin() {
  const [messages, setMessages] = useState([]);
  const [msg, setMsg] = useState("");
  const [socket, setSocket] = useState();

  useEffect(() => {
    const _socket = io(process.env.REACT_APP_WS);

    // fist time socket setup
    _socket.on("connect", () => {
      console.log("Admin connected by: " + _socket.id);
      setSocket(_socket);
    });

    _socket.on("message", (messages) => {
      setMessages(messages);
    });
  }, []);

  const sendMessage = (sender) => {
    console.log(msg + " sent to " + sender);
    setMsg("");
  };

  return (
    <div>
      <h2>Admin</h2>
      {socket && <p>{socket.id}</p>}
      {messages.map((data, key) => (
        <div key={key}>
          <span>
            <strong>{data.msg}</strong> by <i>{data.sender}</i>
          </span>
          <input
            type="text"
            onChange={(e) => {
              setMsg(e.target.value);
            }}
          />
          <button onClick={() => sendMessage(data.sender)}>Send</button>
        </div>
      ))}
    </div>
  );
}
