const mongoose = require("mongoose");

async function mongodbConnected(url) {
    return mongoose.connect(url)
}

module.exports = {
    mongodbConnected,
}