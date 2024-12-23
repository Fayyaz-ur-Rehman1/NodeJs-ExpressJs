require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const userRoutes = require("./routes/user");
const { mongoDbConnected } = require("./connect");
const { checkForAuthunticationCookie } = require("./middlewares/authontication");
const blogRoutes = require("./routes/blog");
const Blog = require("./models/blog");

const app = express();
const PORT = process.env.PORT || 3333;

mongoDbConnected(process.env.MONGO_URL).then(() => console.log("MongoDB Connected"));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthunticationCookie("token"));
app.use(express.static(path.resolve("./public")));

app.get("/", async (req, res) => {
    const allBlogs = await Blog.find({});
    res.render("home", {
        user: req.user,
        blogs: allBlogs,
    });
})

app.use("/user", userRoutes);
app.use("/blog", blogRoutes);

app.listen(PORT, () => console.log(`Server is Started at PORT: ${PORT}`));