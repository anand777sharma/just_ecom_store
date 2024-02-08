const ProductModel = require('../models/Product');
const { seedproducts, seeduser }= require('../constant/product_and_users')
// add product controller
const addproduct = async (req, res) => {
  try {
    // destructuring res.body
    const { name, description, discount, category, quantity, price } = req.body;
    const picture = req.file.path;
    if (!name || !description || !discount || !category || !quantity || !price) {
      return res.status(400).json({
        message: "All Fields are mandatory"
      })
    }
    // if image is not present
    if (!picture) {
      return res.status(400).json({
        message: "please select product Image"
      })
    }
    // saving the new product
    const newProduct = new ProductModel({ name, description, discount, category, quantity, price, picture });
    await newProduct.save();
// sending response
    res.status(201).json({ message: "ProductAdded" })
  } catch (error) {
    console.log(error);
  }
}

const getAllProducts = async (req, res) => {
  try {
    // getting all product data in data variable
    const data = await ProductModel.find();
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    // sending 500 response when error occured
    res.status(500).send({ message: "Internal Error Occured" })
  }
}
// getting one products detail using its id
const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await ProductModel.findById(id);
    if (!product) {
      return res.status(404).send({ message: "Product not found" });
    }
    res.status(200).send(product);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Error Occurred" });
  }
};
// edit product
const editProductById = async (req, res) => {
  try {
    const { name, description, price, category, quantity } = req.body;

    // Validation
    switch (true) {
      case !name:
        return res.json({ error: "Name is required" });
      case !description:
        return res.json({ error: "Description is required" });
      case !price:
        return res.json({ error: "Price is required" });
      case !category:
        return res.json({ error: "Category is required" });
      case !quantity:
        return res.json({ error: "Quantity is required" });
    }

    const product = await ProductModel.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    );
// saving updated product
    await product.save();

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(400).json(error.message);
  }
};

// 		/deleteProductById
const deleteProductById = async (req, res) => {
  // getting product id by req.params.id
  const product = await ProductModel.findById(req.params.id);
  if (product) {
    // deleting product by product id
    await ProductModel.deleteOne({ _id: product._id });
    res.json({ message: "product removed" });
  } else {
    res.status(404);
    // throwing error
    throw new Error("product not found.");
  }
};

const seedproduct = async (req,res)=>{
  try {
    const data = await ProductModel.find();
    res.status(200);
    if(data.length>1){
      return res.status(400).json({
        message: "data base is already have products"
      })
    }
    else{
      await ProductModel.insertMany(seedproducts);
      return res.status(200).json({
        message: "data seeded successfully"
      })
    }
    
  } catch (error) {
    console.log(error);
  }
// console.log(seedproducts);
}

module.exports = { addproduct, getAllProducts, getProductById, editProductById, deleteProductById,seedproduct }