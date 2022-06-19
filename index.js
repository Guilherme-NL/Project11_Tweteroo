import express from "express";
import cors from "cors";

const server = express();

server.use(cors());
server.use(express.json());

const users = [];
const tweets = [];

server.post("/sign-up", (req, res) => {
  const user = req.body;
  users.push(user);
  console.log(users);
  res.send("ok");
});

server.post("/tweets", (req, res) => {
  const tweet = req.body;
  tweets.push(tweet);
  console.log(tweets);
  res.send("ok");
});

server.get("/tweets", (req, res) => {
  const merged = [];
  for (let i = 0; i < tweets.length; i++) {
    merged.push({
      ...tweets[i],
      ...users.find((user) => user.username === tweets[i].username),
    });

    if (merged.length > 10) {
      merged.splice(0, 1);
    }
  }

  res.send(merged);
});

server.listen(5000);
