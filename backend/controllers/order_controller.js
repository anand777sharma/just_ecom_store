const OrderModel = require("../models/Order");

const addOrderByUserId = async (req, res) => {
  try {
    const { customerid, amount, address, products } = req.body;

    const newOrder = new OrderModel({ customerid, amount, address, products });
    await newOrder.save();

    res.status(201).json({ message: "OrderAdded Successfully" })
  } catch (error) {
    console.log(error);
  }
}

const getAllOrdersByUserId = async (req, res) => {
  try {
    const customerid = req.params.customerid;

    // Fetch all orders for the given customerid from the database
    const orders = await OrderModel.find({ customerid });

    res.status(200).json({ orders });
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getallorder = async (req, res) => {
  try {
    const data = await OrderModel.find();
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Error Occured" })
  }
}

module.exports = {
  addOrderByUserId, getAllOrdersByUserId, getallorder
}