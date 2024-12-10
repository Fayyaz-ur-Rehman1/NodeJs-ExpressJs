const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const { connectMongoDb } = require("./connect");
const urlRouter = require("./routes/url");
const staticRouter = require("./routes/staticRouter");
const userRouter = require("./routes/user");
const { restrictToLoggedinUserOnly, checkAuth } = require("./middlewares/auth");

const app = express();
const PORT = 4004;

connectMongoDb("mongodb://127.0.0.1:27017/short-url").then(console.log("MongoDb is Connected"));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());

// Routes
app.use("/url", restrictToLoggedinUserOnly, urlRouter);
app.use("/user", userRouter);
app.use("/", checkAuth, staticRouter);

app.listen(PORT, () => console.log(`Server Started at PORT : ${PORT}`));