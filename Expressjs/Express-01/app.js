const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>")
})
app.get("/about", (req, res) => {
    res.send("<h1>About Page</h1>" + "<h1>" + "my name is " + req.query.myname + " my age is" + req.query.age + "</h1>");
})
app.listen(4000, () => console.log("Server is Started"));