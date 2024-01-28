const mongoose = require('mongoose');
// creating schema
const categorySchema = new mongoose.Schema({
    categoryname: {
        type: String,
        required: true
    }
},{timestamps:true})
// converting schema to model and exporting
module.exports=mongoose.model('Category',categorySchema);