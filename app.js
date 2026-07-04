require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const uploadRoutes = require("./src/routes/upload.routes");
const registerChatSocket = require("./src/socket/chat.socket");

const app = express();

app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));

app.use("/uploads", express.static("uploads"));



app.use("/api/v1/upload", uploadRoutes);

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

registerChatSocket(io);

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB Successfully");

    server.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB Error:", err.message);
  });