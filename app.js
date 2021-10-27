const path = require("path");
const express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/", "index.html"));
});

app.listen(3000);
console.log("Running at http://localhost:3000");