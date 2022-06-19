import express from "express";
import cors from "cors";

const server = express();

server.use(cors());

const tweteroo = [];

server.get("/rota", (req, res) => {
  res.send("Oi");
});

server.post("/rota", (req, res) => {
  res.send("Oi");
});

server.listen(4000);
