const mongoose = require("mongoose");

function mongoDbConnected(url) {
    return mongoose.connect(url);
}

module.exports = {
    mongoDbConnected,
}