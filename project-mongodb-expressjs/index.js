const express = require("express");
const { mongodbConnected } = require("./connection");
const userRouter = require("./routes/user");
const app = express();
const PORT = 4003;

// Built in Middleware
app.use(express.urlencoded({ extended: true }))

// mongodb database connection
mongodbConnected("mongodb://127.0.0.1:27017/friendData")
    .then(() => console.log("Mongoose is Connected"));

// User Router
app.use("/user/api", userRouter);



app.listen(PORT, console.log(`Server is Started at Port No: ${PORT}`))