const User = require("../models/User");
const bcrypt = require('bcrypt')
// get all users data
const getallusers = async (req, res) => {
    try {
        const data = await User.find();
        // sending users data in response
        res.status(200).send(data);
    } catch (error) {
        // loging error
        console.log(error);
        res.status(500).send({ message: "Internal Error Occured" })
    }
}
// edit profile controller
const editprofile = async (req, res) => {
    try {
        // destructuring req.body
        const { name, username, email, password, address } = req.body;
        const user = await User.findById(req.user._id);
        // hashing password if updated
        const hashedpassword = password ? await bcrypt.hash(password, 10) : undefined;
        const updateuser = await User.findByIdAndUpdate(
            req.user._id,
            {
                name: name || user.name,
                username: username || user.username,
                email: email || user.email,
                address: address || user.address,
                password: hashedpassword || user.password,
            },
            { new: true }
        )
        // sending status and updated user as response
        res.status(200).send({
            message: "profile updated Susccesfully", updateuser
        })
    } catch (error) {
        // loging out error
        console.log(error);
    }
}
// deleting user by id 
const deleteUserById = async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
        await User.deleteOne({ _id: user._id });
        res.json({ message: "product removed" });
    } else {
        res.status(404);
        throw new Error("product not found.");
    }
};

module.exports = { getallusers, editprofile, deleteUserById }