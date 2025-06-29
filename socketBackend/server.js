import "dotenv/config";
import express from "express";
import http from "http";
import { Server } from "socket.io";

import api from "./routes/api.js";
import cors from "cors";

const app = express();
const server = http.createServer(app);
app.use(cors());


app.use("/", api);




export const io = new Server(server, {
  cors: {
    origin: "*", // For Dev Mode
    methods: ["GET", "POST"],
  },
});





const port = 5000;
server.listen(port, function () {
  console.log("app listening on port : " + port);
});
