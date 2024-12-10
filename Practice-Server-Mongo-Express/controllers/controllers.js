const User = require("../models/model");

async function getAllUser(req, res) {
    const user = await User.find({});
    res.json(user);
}

async function createAllUser(req, res) {
    const body = req.body;
    await User.create({
        name: body.name,
        age: body.age,
        email: body.email,
        gender: body.gender,
        job_title: body.job_title
    })
    res.status(201).json({ msg: "data Sucessfuly Created" });
}

module.exports = {
    getAllUser,
    createAllUser
}