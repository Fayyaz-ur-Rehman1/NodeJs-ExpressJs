
const express = require("express");

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
    return res.json({
        massage: `Hello form Express Server ${process.pid}`
    });
});
app.listen(PORT, () => console.log(`Server is start At Port No: ${PORT}`))