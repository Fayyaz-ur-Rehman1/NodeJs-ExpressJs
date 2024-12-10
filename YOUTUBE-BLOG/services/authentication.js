let JWT = require("jsonwebtoken");
let secrat = "iranman@123";

function createTokenForUser(user) {
    const payload = {
        _id: user._id,
        email: user.email,
        profileImageURL: user.profileImageURL,
        role: user.role,
    }
    const token = JWT.sign(payload, secrat);
    return token;
}

function validateToken(token) {
    const payload = JWT.verify(token, secrat)
    return payload;
}

module.exports = {
    createTokenForUser,
    validateToken,
}