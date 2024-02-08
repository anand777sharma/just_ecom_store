const express= require('express');
const {autheticate,authorizeAdmin} = require('../middlewares/protectedRoute');
const { addproduct, getAllProducts, getProductById,editProductById,deleteProductById,seedproduct } = require('../controllers/product_controller');
const upload = require('../middlewares/fileupload');


const router= express.Router();
// product related routes
router.post('/addproduct',upload.single('picture'),addproduct);
router.get('/allproducts',getAllProducts);
router.get('/getProductId/:id',getProductById);
router.put('/editProductById/:id', editProductById);
router.delete('/deleteProductById/:id' ,deleteProductById);
router.post('/seedproduct' ,seedproduct);

module.exports=router;
