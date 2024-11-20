const express = require("express");
const fs = require("fs");
const zlib = require("zlib");
const status = require("express-status-monitor");

const app = express();
const PORT = 7002;

app.use(status());

fs.createReadStream("./sample.txt").pipe(zlib.createGzip().pipe(fs.createWriteStream("./sample.zip")));

app.get("/", (req, res) => {
    const streams = fs.createReadStream("./sample.txt", "utf-8");
    streams.on("data", (chunks) => res.write(chunks));
    streams.on("end", () => res.end());
})

app.listen(PORT, console.log(`Server is Started at PORT No: ${PORT}`))