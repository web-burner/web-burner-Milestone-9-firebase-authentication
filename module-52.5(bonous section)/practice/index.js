const express = require("express");
const app = express();
const port = 5400;
const cors = require('cors')
const users = require("./users.json");
app.use(cors())
app.get("/", (req, res) => {
  res.send("running my third server right now");
});
app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const found = users.find((user) => user.id === id);
  res.send(found);
});

app.listen(port);
