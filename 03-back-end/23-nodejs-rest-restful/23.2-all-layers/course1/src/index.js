const express = require("express");
const app = express();
const {
  app: { port },
} = require("./config/config");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App running at port ${port}`);
});
