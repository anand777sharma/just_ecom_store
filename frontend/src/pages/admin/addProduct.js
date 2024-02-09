import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/auth';
function AddProduct() {
    const [auth] = useAuth();
    const [image, setImage] = useState({ preview: '', data: '' });
    const [product, setProduct] = useState({ name: '', description: '', discount: '', category: '', quantity: 10, price: 340, picture: '' });
    const [categories, setCategories] = useState([]);
    let url = '';
    // Function to handle file selection
    const handleFileSelect = (e) => {
        const img = {
            preview: URL.createObjectURL(e.target.files[0]), // Create preview URL for selected image
            data: e.target.files[0] // Store selected image file object
        };
        setImage(img); // Update image state with selected image information
    };

    // Function to handle image upload to server
    const handleImgUpload = async () => {
        // Create FormData object to send file data to server
        let formData = new FormData();
        formData.append('file', image.data); // Append selected image file to FormData

        // Send POST request to server to upload image
        const response = await axios.post(`http://localhost:5000/api/file/uploadFile`, formData);
        return response; // Return response from server
    };



    // featching category data
    const fetchData = async () => {
        try {
            const resp = await axios.get('http://localhost:5000/api/category/getallcategories', {
                headers: { Authorization: `Bearer ${auth?.token}` }
            });
            setCategories(resp.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])


    const submitHandler = async (e) => {
        e.preventDefault();

        if (image.data !== '') {
            // If an image is selected, upload it to the server
            const imgRes = await handleImgUpload();
            url = "http://localhost:5000/api/file/files/" + imgRes.data.fileName; // Construct image URL
        }

        const formData = new FormData();
        formData.append('name', product.name);
        formData.append('description', product.description);
        formData.append('discount', product.discount);
        formData.append('category', product.category);
        formData.append('quantity', product.quantity);
        formData.append('price', product.price);
        formData.append('picture', url);

        try {
            await axios.post('http://localhost:5000/api/product/addproduct', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            toast.success('Product Added');
            setProduct({ name: '', description: '', discount: '', category: '', quantity: 10, price: 340, picture: '' })

        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);

        }
    }

    return (
    // add product component
    
    <div className='container'>
        <div className="mb-3 mt-3 text-center text-secondary display-6 fw-bold">
            Add Products
        </div>
        <form onSubmit={submitHandler}>
            <label className="form-label">Image</label>
            <input type='file' className='form-control mb-3'
                onChange={handleFileSelect} />

            <img src={image.preview} className="text-center mb-3 mx-auto" style={{height:200}} alt={image.data} /> <br/>


            <label className="form-label">Name of Product</label>
            <input type='text' className='form-control mb-3' placeholder='Name of the Product'
                value={product.name} onChange={(e) => setProduct({ ...product, name: e.target.value })} />

            <label className="form-label">Description of the product</label>
            <textarea type='text' className='form-control mb-3' placeholder='description of the Product'
                value={product.description} onChange={(e) => setProduct({ ...product, description: e.target.value })} />

            <label className="form-label">discount on product</label>
            <select className="form-select mb-3" aria-label="Default select example" onChange={(e) => setProduct({ ...product, discount: e.target.value })} >
                <option selected>--SELECT DISCOUNT--</option>
                <option value="10%">10%</option>
                <option value="20%">20%</option>
                <option value="30%">30%</option>
                <option value="40%">40%</option>
                <option value="50%">50%</option>
                <option value="60%">60%</option>
                <option value="70%">70%</option>
                <option value="80%">80%</option>
                <option value="90%">90%</option>
            </select>
            <label className="form-label">Category of the Product</label>

            <select className="form-select mb-3" aria-label="Default select example" onChange={(e) => setProduct({ ...product, category: e.target.value })} >

                <option selected>--SELECT CATEGORY--</option>
                {categories.map((item) => (
                    <option key={item._id} value={item.categoryname}> {item.categoryname}</option>
                ))}
            </select>

            <label className="form-label">Quantity of the Product</label>
            <input type='text' className='form-control mb-3' placeholder='quantity of the Product'
                value={product.quantity} onChange={(e) => setProduct({ ...product, quantity: e.target.value })} />

            <label className="form-label">Price of the Product</label>
            <input type='number' className='form-control mb-3' placeholder='Price of the Product'
                value={product.price} onChange={(e) => setProduct({ ...product, price: e.target.value })} />
            <div className="text-center">
                <button className='btn btn-secondary shadow btn-lg mb-5 ' type='submit'>Save Product</button>

            </div>
        </form>
    </div>
    );
}

export default AddProduct;