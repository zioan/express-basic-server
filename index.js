const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

app.listen(3000, () => {
  console.log("app listening on port 3000");
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.resolve(__dirname, "about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.resolve(__dirname, "contact.html"));
});

app.get("/json", (req, res) => {
  res.json({ name: "John" });
});

app.get("/page", (req, res) => {
  res.send("Simple page");
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "notFound.html"));
});

// const homePage = fs.readFileSync("index.html");
// const aboutPage = fs.readFileSync("about.html");
// const contactPage = fs.readFileSync("contact.html");
// const notFoundPage = fs.readFileSync("notFound.html");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.end(homePage);
//   } else if (req.url === "/about") {
//     res.end(aboutPage);
//   } else if (req.url === "/contact") {
//     res.end(contactPage);
//   } else {
//     res.writeHead(404);
//     res.end(notFoundPage);
//   }
//   // console.log(req.url);
// });

// server.listen(3000);
// //$ node index.js
