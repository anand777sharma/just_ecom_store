const express= require('express');
const { getAllOrdersByUserId, addOrderByUserId,getallorder } = require('../controllers/order_controller');
const {autheticate,authorizeAdmin} = require('../middlewares/protectedRoute');

const router= express.Router();

router.post('/getAllOrdersByUserId/:customerid',autheticate,getAllOrdersByUserId);

router.post('/addOrderByUserId',autheticate,addOrderByUserId);

router.get('/getallorder',getallorder)
 
module.exports=router;
