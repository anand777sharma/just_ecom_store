const express = require('express');
const { getOrdersController, getAllOrdersController, orderStatusController } = require('../controllers/order_controller');
const { autheticate, authorizeAdmin } = require('../middlewares/protectedRoute');

const router = express.Router();

//orders
router.get("/orders", autheticate, getOrdersController);

//all orders
router.get("/all-orders", autheticate, authorizeAdmin, getAllOrdersController);

// order status update
router.put("/order-status/:orderId", autheticate, authorizeAdmin, orderStatusController)

module.exports = router;
