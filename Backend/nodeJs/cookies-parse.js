// Cookies are small pieces of data stored in browser.
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

// Middleware
app.use(cookieParser());

// Route to set cookie
app.get("/setcookie", (req, res) => {

    res.cookie("username", "Ankit");

    res.send("Cookie Set");
});

// Route to read cookie
app.get("/getcookie", (req, res) => {

    res.send(req.cookies);
});

app.listen(3000);