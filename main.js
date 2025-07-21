const { readFileSync } = require("fs");
const express = require("express");
const http = require("http");

const app = express();
const port = 3000;

const homePage = readFileSync(
  "./node-express-course/02-express-tutorial/navbar-app/index.html"
);
const homeStyles = readFileSync(
  "./node-express-course/02-express-tutorial/navbar-app/styles.css"
);
const homeLogic = readFileSync(
  "./node-express-course/02-express-tutorial/navbar-app/browser-app.js"
);
const homeLogo = readFileSync(
  "./node-express-course/02-express-tutorial/navbar-app/logo.svg"
);

const server = http.createServer((req, res) => {
  const url = req.url;
  console.log(url);
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  } else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyles);
    res.end();
  } else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeLogic);
    res.end();
  } else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(homeLogo);
    res.end();
  }
});

// app.get("/", (req, res) => {
//   const url = req.url;
//   console.log(url);

//   if (url === "/") {
//     res.writeHead(200, { "content-type": "text/html" });
//     res.write(homePage);
//     res.end();
//   } else if (url === "/styles.css") {
//     res.writeHead(200, { "content-type": "text/css" });
//     res.write(homeStyles);
//     res.end();
//   }
// });

// app.listen(port, () => {
//   console.log(`open http://localhost:${port}/\n`);
// });

server.listen(port, () => {
  console.log(`open http://localhost:${port}/\n`);
});
