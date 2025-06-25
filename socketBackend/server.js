import "dotenv/config";
import express from "express";
import http from "http";
import { lobby, lobbyTime, userLobbies } from "./global/GlobalVariables.js";

import api from "./routes/api.js";
import cors from "cors";

const app = express();
const server = http.createServer(app);
app.use(cors());


app.use("/", api);

app.get("/", (req, res) => {
  console.log(lobby);
  console.log(lobbyTime);
  console.log(userLobbies);
  const object = {
    title: "camelCase mars doodle game app",
    server: "on",
    statusCode: 200,
  };
  res.json(object);
});





const port = 5000;
server.listen(port, function () {
  console.log("app listening on port : " + port);
});
