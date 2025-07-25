const express = require("express");

const app = express();
const port = 3000;
const log = console.log;

const { products } = require("./data.js");

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1><a href='/api/products'>Products</a>");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params;
  const product = products.find((product) => product.id === Number(productID));

  if (!product) {
    return res.status(404).send("<h1>Product not found</h1>");
  }

  log(req.params);
  res.json(product);
});

app.get("/api/v1/:id/name/:name", (req, res) => {
  const params = req.params;
  log(params);
  res.send(`<h1>hello user ${params.name} with id ${params.id}</h1>`);
});

app.get("/api/v1/query", (req, res) => {
  const query = req.query;
  log(query);
  res.send('some query')
});

app.listen(port, () => {
  log(`Server is running on http://localhost:${port}`);
});
