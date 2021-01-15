var sockets = {};
var { Server } = require("socket.io");
var corsOptions = {
  origin: [
    "http://localhost:3000", // react app
    "http://localhost:5000", // svelte app
    "http://localhost:8080", // vue app
  ],
};

sockets.init = (server) => {
  console.log("initializing sockets");

  var io = new Server(server, {
    cors: corsOptions,
  });

  io.on("connection", (socket) => {
    console.log("user " + socket.id + " connected");

    // socket is open and can transfer information
    // console.log(socket);
    socket.on("message", (msg) => {
      console.log("message: " + msg + " >>> by user " + socket.id);
    });

    socket.on("disconnect", () => {
      console.log("user " + socket.id + " disconnected");
    });
  });
};

module.exports = sockets;
