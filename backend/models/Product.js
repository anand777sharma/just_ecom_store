const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description:{
        type:String,
        required:true
    },
    price: {
        type: Number,
        required: true,
    }, 
    discount:{
        type:String,
        default:"5"
    },
    picture: {
        type: String,
        required: true,
    },
    category:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        default:"0"
    }

},{timestamps:true})

module.exports=mongoose.model('Product',productSchema);