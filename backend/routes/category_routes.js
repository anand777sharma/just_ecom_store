const express= require('express');
const {autheticate,authorizeAdmin} = require('../middlewares/protectedRoute');
const { createcategory,getallcategories ,deletecategorybyid, editcategory} = require('../controllers/category_controller');

const router= express.Router();

router.post('/createcotegory',autheticate,authorizeAdmin,createcategory)
router.get('/getallcategories',getallcategories)
router.put("/editcategory",autheticate,authorizeAdmin,editcategory)
router.delete('/deletecategorybyid/:id',autheticate,authorizeAdmin ,deletecategorybyid);

module.exports=router;
