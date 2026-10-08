const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Welcome to my first ever Express server");
});
app.get("/data", (req, res) => {
  res.send("More data coming!");
});

app.listen(4000, () => {
  console.log("my first ever server is running on terminal");
});
