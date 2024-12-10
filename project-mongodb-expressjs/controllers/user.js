// get All User Data
let User = require("../models/user")
async function getAllUser(req, res) {
    const user = await User.find({});
    res.json(user);
}

// get Specific User Data
async function getSpecificUser(req, res) {
    const specificUser = await User.findById(req.params.id)
    res.json(specificUser)
}

// delete Specific User Data
async function deleteSpecificUser(req, res) {
    try {
        await User.deleteOne({ _id: req.params.id });
        return res.json({ status: "Success" });
    } catch (error) {
        return res.status(500).json({ status: "Error", message: error.message });
    }
}

// Update Specific User Data Field
async function editSpecificUser(req, res) {
    try {
        const userId = req.params.id;
        const updateData = req.body;

        const user = await User.findByIdAndUpdate(userId, updateData, { new: true });
        if (!user) {
            return res.status(404).json({ status: "Error", message: "User not found" });
        }
        return res.json({ status: "Success", data: user });
    } catch (error) {

        return res.status(500).json({ status: "Error", message: error.message });
    }
}

// create User Data
async function createUser(req, res) {
    const body = req.body;
    if (!body || !body.name || !body.email || !body.gender || !body.study || !body.collage) {
        return res.status(400).json({ msg: "All field are required..." });
    }

    const result = await User.create({
        name: body.name,
        email: body.email,
        gender: body.gender,
        study: body.study,
        collage: body.collage
    })
    res.status(201).json({ msg: "data successfully created" });
}

module.exports = {
    getAllUser,
    getSpecificUser,
    deleteSpecificUser,
    editSpecificUser,
    createUser,
}