import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useCart } from '../context/cart';
import { useAuth } from '../context/auth';
function Products() {
    const [cart, setCart] = useCart()
    const navigate = useNavigate();
    const [auth] = useAuth()
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState([]);
    const viewProduct = (id) => {
        navigate('/details/' + id);
    }
    const fetchData = async () => {
        try {
            const resp = await axios.get('http://localhost:5000/api/product/allproducts');
            setProducts(resp.data);
        } catch (error) {
            console.log(error);
        }
    }
    const fetchCategory = async () => {
        try {
            const resp = await axios.get('http://localhost:5000/api/category/getallcategories', {
                headers: { Authorization: `Bearer ${auth?.token}` }
            });
            setCategories(resp.data);
        } catch (error) {
            console.log(error);
        }
    }
    const filteredproduct=()=>{

    }

    useEffect(() => {
        fetchData();
        fetchCategory()
    }, [])
    return (
        <div className='container-fluid mt-4'>

            <div className="row">
                <div className="col-lg-2 col-md-4">
                    <div className="card border-0 p-3 mb-3" style={{ position: "sticky", top: 120 }}>
                        <h3>filter section</h3>
                        {
                            categories.map((item) => (
                                <>
                                    <div className="form-check" key={item._id}>
                                        <input className="form-check-input" type="checkbox" value={item.categoryname} id={item._id} onChange={(e) => {
                                            const isChecked = e.target.checked;
                                            if (isChecked) {
                                                // Add the value to filter when checked
                                                setFilter([...filter, e.target.value]);
                                            } else {
                                                // Remove the value from filter when unchecked
                                                setFilter((prevFilter) => prevFilter.filter((value) => value !== e.target.value));
                                            }
                                        }} />
                                        <label className="form-check-label" for={item._id}>
                                            {item.categoryname}
                                        </label>
                                    </div>

                                </>

                            ))
                        }
                        <button className="btn shadow btn-warning my-3 rounded-4" >
                            reset filter
                        </button>
                    </div>
                    {filter}


                </div>
                <div className="col-lg-10 col-md-8">
                    <div className="row g-4">

                        {
                            products.map((item) => (
                                <div className="col-lg-3" key={item._id}>
                                    <div className="card p-2 border-0 shadow-sm" >
                                        <div className='d-flex justify-content-center align-items-center' style={{ height: 250 }} >
                                            <img src={item.picture}
                                                alt={item.name} onClick={() => viewProduct(item._id)} style={{ maxHeight: 250, maxWidth: 250 }} />
                                        </div>

                                        <div className="card-body">
                                            <h6 className="card-title">{item.name}</h6>
                                            <p className="card-text"> ₹ {item.price}</p>
                                            <p className="card-text">{item.description.substring(0, 25)}...</p>
                                            <div className="d-flex justify-content-between">
                                                <button className='btn btn-secondary shadow m-1 ' onClick={() => viewProduct(item._id)}>know More</button>
                                                <button className='btn btn-secondary shadow m-1'
                                                    onClick={() => {
                                                        if (cart.some(i => i._id === item._id)) {
                                                            toast.error('Item already in cart');
                                                        }
                                                        else {
                                                            const updatedItem = { ...item, q: 1 };
                                                            setCart([...cart, updatedItem])
                                                            localStorage.setItem("cart", JSON.stringify([...cart, updatedItem]))
                                                            toast.success('Item Added to cart');
                                                        }

                                                    }}>Add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>

        </div>
    );
}
export default Products;