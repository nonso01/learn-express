const express = require("express");

const app = express();
const port = 3000;
const log = console.log;

const { products, people } = require("./data.js");

app.use(express.static("./methods-public"));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  res.status(201).json({
    success: true,
    person: req.body?.name,
  });

  log(req.body);
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  } else {
    return res.status(401).send("Please provide credentials");
  }
});

app.listen(port, () => {
  log(`Server is running on http://localhost:${port}`);
});
