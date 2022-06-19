import express from "express";
import cors from "cors";

const server = express();

server.use(cors());
server.use(express.json());

const users = [];
const tweteroo = [];

server.post("/sign-up", (req, res) => {
  const user = req.body;
  users.push(user);
  res.send("ok");
});

server.get("/tweets", (req, res) => {
  res.send("Oi");
});

server.post("/tweets", (req, res) => {
  res.send("Oi");
});

server.listen(5000);
