const express = require("express");
const app = express();
const users = require("./users.json");
const port = 3500;
app.get("/", (req, res) => {
  res.send("hello from my second server");
});
app.get("/data", (req, res) => {
  res.send("data is coming soon");
});
app.get("/users", (req, res) => {
  res.send(users);
});
app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log("i need data for", id);
  const findPhone = users.find((user) => user.id === id);
  res.send(findPhone);
});
app.listen(port);
