const mongoose = require("mongoose")

const { ObjectId } = mongoose.Schema.Types;
// creating schema
const OrderSchema = new mongoose.Schema({
    products: [
        {
          type: ObjectId,
          ref: "Products",
        },
      ],
      payment: {},
      buyer: {
        type: ObjectId,
        ref: "users",
      },
      status: {
        type: String,
        default: "Not Process",
        enum: ["Not Process", "Processing", "Shipped", "deliverd", "cancel"],
      },

}, { timestamps: true })
// converting schema to model and exporting
module.exports = mongoose.model('Order', OrderSchema);