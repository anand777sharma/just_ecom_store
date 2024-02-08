const express= require('express');
const {autheticate,authorizeAdmin} = require('../middlewares/protectedRoute');
const { getallusers ,deleteUserById, editprofile} = require('../controllers/user_controller');


const router= express.Router();
// user related route
router.get('/profile',autheticate,(req,res)=>{
    res.send(req.user);//we will pass the user object to access
});

router.get('/isadmin',autheticate,authorizeAdmin,(req,res)=>{
    res.send(req.user);//we will pass the admin user object to access
});
// getall user only for admin
router.get('/getalluser',autheticate,authorizeAdmin,getallusers)
router.put("/profile",autheticate,editprofile)
router.delete('/deleteuserbyid/:id',autheticate,authorizeAdmin ,deleteUserById);

module.exports=router;
