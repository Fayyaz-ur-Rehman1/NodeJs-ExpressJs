const express = require("express");
const jwt = require("jsonwebtoken");
const app = express()
const port = 7600;
const secrateKey = "SecreateKey"

app.get("/", (req, res) => {
    res.json({
        massage: "Simple Api"
    })
})

app.post("/Login", (req, res) => {
    const user = {
        id: 1,
        username: "fayyazurrehman",
        email: "fayyazurrehman@gmail.com"
    }
    jwt.sign({ user }, secrateKey, { expiresIn: "330s" }, (err, token) => {
        res.json({
            token
        })
    })
})

app.post("/profile", virfyToken, (req, res) => {
    jwt.verify(req.token, secrateKey, (err, authData) => {
        if (err) {
            res.send({
                result: "Invaild Token"
            })
        } else {
            res.json({
                massage: "profile accessed",
                authData
            })
        }
    })
})

function virfyToken(req, res, next) {
    const bearerHearder = req.headers["authorization"];
    if (typeof bearerHearder !== 'undefined') {
        const bearer = bearerHearder.split(" ");
        const token = bearer[1];
        req.token = token;
        next();
    } else {
        res.send({
            result: "Token is not vaild"
        })
    }

}

app.listen(port, console.log(`Server is Started at Port No. ${port} `));
