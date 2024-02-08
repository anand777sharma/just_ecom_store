import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth';

const AllProductList = () => {
    const navigate = useNavigate();
    const [auth] = useAuth()
    const [products, setProducts] = useState([]);
    const editProduct = (id) => {
        navigate('/dashboard/editproduct/' + id);
    }
    const deleteProduct = (id) => {
        axios.delete('http://localhost:5000/api/product/deleteProductById/' + id, {
            headers: { Authorization: `Bearer ${auth?.token}` }
        });
    }
    const fetchData = async () => {
        try {
            const resp = await axios.get('http://localhost:5000/api/product/allproducts', {
                headers: { Authorization: `Bearer ${auth?.token}` }
            });
            setProducts(resp.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData();
    }, [deleteProduct])
    return (

        <div className="container-fluid">
            <h3 className='text-center my-4 py-2 shadow bg-light rounded-4'>
                Admin Dashboard
            </h3>
            <div className="row g-3">
                <div className="col-lg-3 mt-3">
                    <div className="d-grid gap-2">
                        <Link className="btn btn-light shadow" to="/dashboard">My Profile</Link>
                        <Link className="btn btn-light shadow" to="/dashboard/order"> My Orders</Link>
                        <Link className="btn btn-light shadow" to="/dashboard/usersorder"> Manage Orders</Link>
                        <Link className="btn btn-light shadow" to="/dashboard/allproductslist">Manange Products</Link>
                        <Link className="btn btn-light shadow" to="/dashboard/users">Manage Users</Link>
                        <Link className="btn btn-light shadow" to="/dashboard/category">Manage Category</Link>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className='container-fluid'>
                        <div className="d-flex ">
                            <div className=" text-secondary fw-bold fw-bold display-6" style={{ marginLeft: "auto" }}>
                                All product List
                            </div>
                            <div className="ms-auto">
                                <Link className="btn btn-lg shadow rounded-5 btn-light me-4 " to="/dashboard/addproduct">
                                    Add Product
                                </Link>
                            </div>

                        </div>



                        <table className='table table-striped table-bordered text-center mt-3'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>discount</th>
                                    <th>Category</th>
                                    <th>quantity</th>
                                    <th>Price</th>
                                    <th>Image</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map((item) => (
                                        <tr key={item._id}>
                                            <td>{item.name}</td>
                                            <td>{item.description}</td>
                                            <td>{item.discount}</td>
                                            <td>{item.category}</td>
                                            <td>{item.quantity}</td>
                                            <td>₹{item.price}</td>
                                            <td><img src={item.picture}
                                                height="100" alt={item.name} /></td>
                                            <td>
                                                <button className='btn btn-danger rounded-5 shadow m-1 ' onClick={() => deleteProduct(item._id)}>delete</button>
                                                <button className='btn btn-light rounded-5 shadow m-1 ' onClick={() => editProduct(item._id)}>edit</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>

        </div>



    );
}

export default AllProductList