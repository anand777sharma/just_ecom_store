const User = require("../models/User");
const bcrypt = require('bcrypt')

const getallusers = async (req, res) => {
    try {
        const data = await User.find();
        res.status(200).send(data);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal Error Occured" })
    }
}

const editprofile = async (req, res) => {
    try {
        const {  name,username, email, password, address} = req.body;
        console.log(req.body);
        const user = await User.findById(req.user._id);
         
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
        res.status(200).send({
            message: "profile updated Susccesfully", updateuser
        })
    } catch (error) {
        console.log(error);
    }
}

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