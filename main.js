const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Martin!");
});

app.listen(port, () => {
  console.log(`open http://localhost:${port}/\n`);
});
