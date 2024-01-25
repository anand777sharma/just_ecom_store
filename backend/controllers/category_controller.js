const Category = require("../models/Category");

// create category
const createcategory = async (req, res) => {
    try {
        console.log(req.body);
        //get Data from the Requet Body
        const { categoryname } = req.body;
        if (!categoryname) {
            return res.status(400).json({
                message: "All Fields are mandatory"
            })
        }
        //check email field must be unique
        let category = await Category.findOne({ categoryname });
        if (category) {
            return res.status(400).json({
                message: "this category is already there"
            })
        }
      
       const newcategory = new Category({ categoryname });
        const resp = await newcategory.save();
        res.status(201).json({ message: "category created successfully", resp })
    } catch (error) {
        res.status(500).json({ message: "An error eccured while creating category", error })
    }
}

// get all category
const getallcategories = async (req, res) => {
    try {
        const data = await Category.find();
        res.status(200).send(data);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal Error Occured" })
    }
}

// edit category
const editcategory = async (req, res) => {
    try {
        const { categoryname } = req.body;
        console.log(req.body);
        const category = await Category.findById(req.category._id);

       const updatecategory = await Category.findByIdAndUpdate(
            req.category._id,
            {
                categoryname: categoryname || category.categoryname
            },
            { new: true }
        )
        res.status(200).send({
            message: "Category updated Susccesfully", updatecategory
        })
    } catch (error) {
        console.log(error);
    }
}

// delete category
const deletecategorybyid = async (req, res) => {
    const category = await Category.findById(req.params.id);
    if (category) {
        await Category.deleteOne({ _id: category._id });
        res.json({ message: "category removed" });
    } else {
        res.status(404);
        throw new Error("category not found.");
    }
};

module.exports = { createcategory,getallcategories, editcategory, deletecategorybyid }