const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    gender: {
        type: String,
    },
    study: {
        type: String,
    },
    collage: {
        type: String,
    }
})

const User = mongoose.model("friend", userSchema);

module.exports = User; 