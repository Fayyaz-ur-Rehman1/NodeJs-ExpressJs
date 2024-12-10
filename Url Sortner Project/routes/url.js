const express = require("express");
const { handleGenrateNewShortUrl, handleGetAnalytics, handleRedirectWebsite } = require("../controllers/url");
const router = express.Router();

router.post("/", handleGenrateNewShortUrl);
router.get("/analytics/:shortId", handleGetAnalytics);
router.get("/:shortId", handleRedirectWebsite);
module.exports = router;