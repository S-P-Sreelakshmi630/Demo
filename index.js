const express = require("express");
const app = express();
const port = 9000;

app.get("/", (req, res) => {
  res.send("Welcome to server");
});

app.listen(port, (req, res) => {
  console.log("server listening on 9000");
});
