const express = require("express");
const app = express();
const data = require("./header.json");
const PORT = 6000;

app.get("/user", (req, res) => {
    console.log(req.headers);
    res.setHeader("X-Myname", "Fayyazurrehman");
    // Always add X to custom headers
    res.json(data);
})
app.listen(PORT, console.log(`Server is Started at ${PORT}`));