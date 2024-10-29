const express = require("express");
const app = express();
const port = 4500;
const reqFilter = require("./middleware");
const router = express.Router();

router.use(reqFilter);

app.get("/", (req, res) => {
    res.send("Welcome to Home Page");
})

router.get("/about", (req, res) => {
    res.send("Welcome to About Page");
})
app.get("/contact", (req, res) => {
    res.send("Welcome to Contact Page");
})
router.get("/user", (req, res) => {
    res.send("Welcome to User Page");
})
app.use("/", router);
app.listen(port, console.log(`Your Server is Started at Port No: ${port}`));