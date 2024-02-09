import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/auth';
import AddCategory from './AddCategory';
const AllCategory = () => {
    const navigate = useNavigate();
    const [auth] = useAuth()
    const [categories, setCategories] = useState([]);

    const deleteCategory = (id) => {

        axios.delete('http://localhost:5000/api/category/deletecategorybyid/' + id, {
            headers: { Authorization: `Bearer ${auth?.token}` }
        });
    }

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
    }, [deleteCategory])

    return (
        // all category
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
                    <div className='container'>
                        <div className=" text-secondary text-center fw-bold display-6 ">
                            All Categories List
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <AddCategory />
                            </div>
                            <div className="col-lg-8">

                                <div className="text-center mt-3">
                                    {
                                        categories.map((item) => (
                                            <>
                                                <div key={item._id} className='fs-5 bg-light py-2 px-3 rounded-5 shadow d-inline-block mb-3' style={{ lineHeight: 1.2 }}>
                                                    {item.categoryname}
                                                    <button className='btn btn-light ps-2 pe-1 py-1 rounded-circle btn-sm mb-1 ms-1 '
                                                        onClick={() => deleteCategory(item._id)}><i className="fas fa-times fa-sm"></i>
                                                    </button>
                                                </div> &nbsp;

                                            </>

                                        ))
                                    }
                                </div>


                            </div>
                        </div>

                    </div>
                </div>


            </div>

        </div>









    );
}

export default AllCategory;