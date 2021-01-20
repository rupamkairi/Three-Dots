import React, { useState } from "react";
//
import io from "socket.io-client";
import { changeGuestChatSocket } from "../store/guestChat";
import { useDispatch } from "react-redux";

export default function Guest() {
  const dispatch = useDispatch();

  const [chatPanel, setChatPanel] = useState(false);
  const [msg, setMsg] = useState("");
  const [socket, setSocket] = useState();

  const startChat = () => {
    if (!socket) {
      const _socket = io(process.env.REACT_APP_WS);

      // fist time socket setup
      _socket.on("connect", () => {
        // console.log("_socket: " + _socket.id);
        setSocket(_socket);
        dispatch(changeGuestChatSocket({ chatSocketId: _socket.id }));
      });
    }
  };

  const sendMessage = () => {
    // socket state reuse
    // console.log("socket: " + socket.id);
    socket.emit("message", msg);
    setMsg("");
  };

  return (
    <div>
      <h2>Guest</h2>
      {chatPanel ? (
        <div>
          <input
            type="text"
            onChange={(e) => {
              setMsg(e.target.value);
            }}
          />
          <button onClick={() => sendMessage()}>send</button>
          <button onClick={() => setChatPanel(false)}>close</button>
        </div>
      ) : (
        <button
          onClick={() => {
            startChat();
            setChatPanel(true);
          }}
        >
          chat
        </button>
      )}
    </div>
  );
}
