const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true,
    },
    redirectUrl: {
        type: String,
        require: true
    },
    visitHistory: [
        {
            timeStamp: { type: Number }
        }
    ],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    }
}, { timestamps: true });

const URL = mongoose.model("urls", urlSchema);

module.exports = URL;