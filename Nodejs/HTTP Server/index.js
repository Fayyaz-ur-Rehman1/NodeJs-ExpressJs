// Node.js ka http module server banane ke liye use hota hai, jo HTTP requests ko handle karta hai aur responses bhejta hai. Isse hum apna custom web server create kar sakte hain bina kisi external library ke.


// const http = require("http");
// const myServer = http.createServer((req, res) => {
//     // console.log("server req recvice");
//     res.end("Hello From Server Again");
// //    console.log(req.headers);

// })

const http = require("http");
const fs = require("fs");
const myServer = http.createServer((req, res) => {
    const log = `${new Date().toLocaleString()} \t ${req.url}`;
    fs.appendFile("log.txt", `${log} user request this time \n`, (err, data) => {
        switch (req.url) {
            case "/":
                res.end("Home page");
                break;
            case "/about":
                res.end("my name is fayyazurrehman");
                break;
            default:
                res.end("404 Not Found");
        }
    });
})

myServer.listen(8000, () => console.log("Server is start"));