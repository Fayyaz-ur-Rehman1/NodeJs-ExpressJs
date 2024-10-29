const express = require("express");
const data = require("./hello.json");
const app = express();
const port = 5500;

app.use(express.urlencoded({ extended: true }));

app.get("/user", (req, res) => {
    res.json(data)
})

app.get("/user/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = data.find(elm => elm.id === id);
    if (user) {
        return res.json(user);
    } else {
        return res.status(404).json({ message: "User not found" });
    }
});

app.post("/user", (req, res) => {
    const body = req.body;
    if (!body.first_name || !body.last_name || !body.email || !body.gender || !body.ip_address) {
        res.status(400).json({ massage: "All fields are requred..." });
    }

    data.push({
        id: data.length + 1,
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        gender: body.gender,
        ip_address: body.ip_address
    });

    res.status(201).json(data)

})
app.listen(port, console.log(`Server is Started at Port: ${port}`));