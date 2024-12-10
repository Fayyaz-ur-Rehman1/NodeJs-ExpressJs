const mongoose = require("mongoose");

// Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
    },
    job_title: {
        type: String,
    }

}, { timestamps: true })

const User = mongoose.model("data", userSchema)

module.exports = User;