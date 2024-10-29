const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 4500;

// Middle ware 
app.use((req, res, next) => {
    console.log("hello");
    next();
})

// custom middle ware
app.use((req, res, next) => {
    fs.appendFile("log.txt", `\n request Time: ${Date.now().toLocaleString()} | Method type: ${req.method} | path: ${req.path}`, (err, data) => {
        next()
    })
})

app.get("/users", (req, res) => {
    res.send("hello bro how are you");
})

app.listen(PORT, console.log(`Server is Started at ${PORT}`));