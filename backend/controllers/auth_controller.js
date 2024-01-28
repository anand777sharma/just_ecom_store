const bcrypt = require('bcrypt')
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

const register = async (req, res) => {
    try {
        console.log(req.body);
        //get Data from the Requet Body
        const { name, username, email, password } = req.body;
        if (!name || !username || !email || !password) {
            return res.status(400).json({
                message: "All Fields are mandatory"
            })
        }
        //check email field must be unique
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                message: "User with provided email is already registered"
            })
        }
         //check username field must be unique
        user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({
                message: "User with provided username is already registered"
            })
        }
        // hashing password
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, username, password: hashPassword });
        // saving new user in the database
        const resp = await newUser.save();
        // sending response 
        res.status(201).json({ message: "User Registered successfully", resp })
    } catch (error) {
        // sennding error message
        res.status(500).json({ message: "An error eccured while regsitration", error })
    }
}
const login = async (req, res) => {
    try {
        // destructuring req.body
        const { email, password } = req.body;
        if (!email || !password) {
            // if email or password is missing
            return res.status(400).json({ message: "Email and password required.." })
        }
        // if email not found in database
        let user = await User.findOne({ email });
        if (!user) {
            // sending 400 as response
            return res.status(400).json({ message: "Email Not registered with Us yet.." })
        }
        const match = await bcrypt.compare(password, user.password);
        const payload = {
            _id: user._id,
            name: user.name,
            email: user.email
        }
        // if password match then send token and user details
        if (match) {
            const token = await jwt.sign(payload, process.env.JWT_SECRET);
            const userdata = {
                _id: user._id,
                name: user.name,
                email: user.email,
                username: user.username,
                address: user.address,
                isAdmin: user.isAdmin
            }
            return res.status(200).json({ message: "Logged in successfully", token, user: userdata })
        } else {
            return res.status(400).json({ message: "Email and password Incorrect.." })
        }
    } catch (error) {
        // loging out error
        console.log(error);
        return res.status(500).json({ message: "Error Occured.." })
    }
}

module.exports = { register, login }