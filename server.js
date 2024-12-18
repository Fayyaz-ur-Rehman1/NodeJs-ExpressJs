const cluster = require("cluster");
const os = require("os");
const express = require("express");

const totalCPUs = os.availableParallelism();

if (cluster.isPrimary) {
    for (let i = 0; i < totalCPUs; i++) {
        cluster.fork();
    }
} else {
    const app = express();
    const PORT = 8000;

    app.get("/", (req, res) => {
        return res.json({
            massage: `Hello form Express Server ${process.pid}`
        });
    });
    app.listen(PORT, () => console.log(`Server is start At Port No: ${PORT}`));
    console.log(`Worker ${process.pid} started`);
}

// PORT, () => console.log(`Server is start At Port No: ${PORT}`)
