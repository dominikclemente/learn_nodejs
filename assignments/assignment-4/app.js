const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const users = [];

app.set("view engine", "pug");

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  res.render("index", { pageTitle: "Home" });
});

app.get("/users", (req, res, next) => {
  res.render("users", { pageTitle: "Users", users });
});

app.post("/add-user", (req, res, next) => {
  users.push({ name: req.body.username });
  res.redirect("users");
});

app.listen(3000);
