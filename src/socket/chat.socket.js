const registerChatSocket = (io) => {
  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("chat:join", (data) => {
      const username = data.username;

      console.log(`${username} joined the chat`);

      socket.broadcast.emit("user-joined", {
        username,
        message: `${username} joined the chat`,
      });
    });

    socket.on("chat:message", (data) => {
      const messageData = {
        username: data.username,
        text: data.text,
        time: new Date(),
      };

      io.emit("chat:message", messageData);
    });

    socket.on("chat:typing", (data) => {
      socket.broadcast.emit("chat:typing", {
        username: data.username,
        message: `${data.username} is typing...`,
      });
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);

      socket.broadcast.emit("user-left", {
        socketId: socket.id,
        message: "A user left the chat",
      });
    });
  });
};

module.exports = registerChatSocket;