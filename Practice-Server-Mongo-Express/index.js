const express = require("express");
const { connectMongoDB } = require("./connect");
const router = require("./routes/route");
const app = express();
const PORT = 6400;

connectMongoDB("mongodb://127.0.0.1:27017/practice_server").then(() => console.log("MongoDb is Connected"));
app.use(express.urlencoded({ extended: false }))
app.use("/user", router)
app.listen(PORT, () => console.log(`Server is Connected at PORT No: ${PORT}`));