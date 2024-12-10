const { Router } = require("express");
const multer = require("multer");
const path = require("path");

const Blog = require("../models/blog");
const Comment = require("../models/comment");
const router = Router();



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve("./public/uploads/"))
    },
    filename: function (req, file, cb) {
        const fileName = `${Date.now()}-${file.originalname}`;
        cb(null, fileName);
    }
})

const upload = multer({ storage: storage })

router.get("/add-new", (req, res) => {
    return res.render("addBlog", {
        user: req.user,
    })
});


router.get("/:id", async (req, res) => {
    const blog = await Blog.findById(req.params.id).populate("createdBy");
    const comment = await Comment.find({ blogId: req.params.id }).populate("createdBy")

    return res.render("blog", {
        user: req.user,
        blog,
        comment,
    })
})

router.post("/comment/:blogId", async (req, res) => {
    await Comment.create({
        content: req.body.content,
        blogId: req.params.blogId,
        createdBy: req.user._id,
    })
    return res.redirect(`/blog/${req.params.blogId}`)
})


router.post("/", upload.single("coverImage"), async (req, res) => {
    const { title, body } = req.body
    const blog = await Blog.create({
        body,
        title,
        createdBy: req.user._id,
        coverImageURL: `/uploads/${req.file.filename}`
    })
    return res.redirect(`/blog/${blog._id}`)
});

router.post("/:id/delete", async (req, res) => {
    const blogId = req.params.id;

    try {
        const blog = await Blog.findOneAndDelete({
            _id: blogId,
            createdBy: req.user._id,
        });

        if (!blog) {
            return res.status(403).send("Not authorized to delete this blog.");
        }
        return res.redirect("/"); 
    } catch (error) {
        console.error("Error deleting blog:", error);
        return res.status(500).send("An error occurred while deleting the blog.");
    }
});

module.exports = router;