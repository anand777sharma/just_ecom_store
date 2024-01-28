const cors= require('cors');
const express= require('express');
const mongoose= require('mongoose');
const dotenv= require('dotenv');
// configuring dotenv file
dotenv.config();

const app= express();
app.use(cors());//to connect with Frontend
app.use(express.json());//middleware for JSON Parser

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Connected"))
.catch(err=>console.log("Error while connecting",err))

// all routes for different controllers
app.use('/uploads',express.static('uploads'));
app.use('/api/auth',require('./routes/auth_routes'));
app.use('/api/user',require('./routes/user_routes'));
app.use('/api/product',require('./routes/product_routes'));
app.use('/api/payment',require('./routes/payment_routes'));
app.use('/api/category',require('./routes/category_routes'));

// listening port using env folder to store port
app.listen(process.env.PORT,()=>{
    console.log(`Server is listing on PORT: ${process.env.PORT}`);
})

