const express = require("express");
const router = express.Router();
const { getAllUser, createAllUser } = require("../controllers/controllers")
router.route("/")
    .get(getAllUser)
    .post(createAllUser);

module.exports = router;