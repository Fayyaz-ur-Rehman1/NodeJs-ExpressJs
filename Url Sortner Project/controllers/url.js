const shortid = require("shortid");
const URL = require("../models/url");

// handle Genrate New Short Url function
async function handleGenrateNewShortUrl(req, res) {
    const shortId = shortid();
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: "url is require" });

    await URL.create({
        shortId: shortId,
        redirectUrl: body.url,
        visitHistory: [],
        createdBy: req.user._id,
    })

    return res.render("home", {
        id: shortId,
    })
}

// handle get Analytics

async function handleGetAnalytics(req, res) {
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId });
    res.json({ totalClick: result.visitHistory.length, analytics: result.visitHistory });

}

async function handleRedirectWebsite(req, res) {
    const shortId = req.params.shortId
    const entry = await URL.findOneAndUpdate(
        {
            shortId,
        },
        {
            $push: {
                visitHistory: {
                    timeStamp: Date.now(),
                },
            },
        },
        { new: true },
    );
    res.redirect(entry.redirectUrl)
}

module.exports = {
    handleGenrateNewShortUrl,
    handleGetAnalytics,
    handleRedirectWebsite,
}