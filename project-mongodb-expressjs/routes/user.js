const express = require("express");
const router = express.Router();
const { getAllUser, getSpecificUser, deleteSpecificUser, editSpecificUser, createUser } = require("../controllers/user")


// get All User Data
router.route("/")
    .get(getAllUser)
    .post(createUser);

// get Specific User Data and Delete User and Edit User
router.route("/:id")
    .get(getSpecificUser)
    .delete(deleteSpecificUser)
    .patch(editSpecificUser);

module.exports = router;