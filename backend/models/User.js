const mongoose = require('mongoose');
// creating schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: {},
        default: null
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    dateOfBirth: String

}, { timestamps: true })
// converting schema to model and exporting
module.exports = mongoose.model('User', userSchema);