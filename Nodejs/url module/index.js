// Query parameters URL ke end par aane wale key-value pairs hote hain, jo additional information pass karne ke liye use hote hain. Ye ? ke baad start hote hain aur multiple parameters ko & se separate kiya jata hai.


const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
    if (req.url === "/favicon.ico") return res.end();
    const log = `${new Date()} \t file url : ${req.url} \n`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);

    fs.appendFile("log.text", log, (err, data) => {
        switch (myUrl.pathname) {
            case "/":
                res.end("Home page");
                break;
            case "/about":
                const username = myUrl.query.myname
                res.end(`my name is ${username}`);
                break;
            case "/search":
                const search = myUrl.query.search_query;
                res.end("Here are your result for" + search);
            default:
                res.end("404 Not Found");
        };
    });
});
myServer.listen(9000, () => console.log("Server is Started"));


