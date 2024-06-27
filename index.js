const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Welcome to server at 9000");
});

app.listen(port, (req, res) => {
  console.log("server listening on 9000");
});
