import "dotenv/config";
import express from "express";
import http from "http";


import cors from "cors";

const app = express();
const server = http.createServer(app);
app.use(cors());






const port = 5000;
server.listen(port, function () {
  console.log("app listening on port : " + port);
});
