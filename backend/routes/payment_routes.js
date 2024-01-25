const express= require('express');
const {autheticate,authorizeAdmin} = require('../middlewares/protectedRoute');
const {braintreeToken,brainTreePayment} = require("../controllers/payment_controller");

const router= express.Router();

//token
router.get("/braintree/token", braintreeToken);

//payments
router.post("/braintree/payment", autheticate, brainTreePayment);
module.exports=router;
