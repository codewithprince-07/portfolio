const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const nodemailer = require("nodemailer");
require('dotenv').config(); // Load environment variables from .env file

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));


app.get("/about", (req, res) => {
    res.render("index");
});

app.get("/skills", (req, res) => {
    res.render("skill");
});


app.get("/projects", (req, res) => {
    res.render("project");
});





app.listen(port, () => {
    console.log(` Server running at http://localhost:${port}`);
});
