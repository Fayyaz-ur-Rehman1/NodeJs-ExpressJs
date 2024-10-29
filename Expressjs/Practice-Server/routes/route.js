const express = require("express");
const router = express.Router();
const { htmlfolder, apidata, apigetid, adddata } = require("../controllers/controlle")

router.route("/").get(htmlfolder);
router.route("/api").get(apidata);
router.route("/:id").get(apigetid);
router.route("/api").post(adddata);

module.exports = router;