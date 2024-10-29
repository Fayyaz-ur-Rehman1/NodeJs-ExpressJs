const express = require("express");
const app = express();
const product_routes = require("./routes/product");
const port = 3400;

app.get("/", (req, res) => {
    res.send("hello");
})

app.use("/Product/api", product_routes);

app.listen(port, console.log(`Server started at port no. ${port}`))