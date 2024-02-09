import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Profile from '../Profile';

function AdminDashboard() {

    const navigate = useNavigate();

  
    return (
        // admin dashboard
        <div className="container-fluid">
            <h3 className='text-center my-4 py-2 shadow bg-light rounded-4'>
                Admin Dashboard
            </h3>
            <div className="row g-3">
                <div className="col-lg-3">
                    <div className="d-grid gap-2">
                        <Link className="btn btn-light shadow" to = "/dashboard">My Profile</Link>
                        <Link className="btn btn-light shadow" to = "/dashboard/order"> My Orders</Link>
                        <Link className="btn btn-light shadow" to = "/dashboard/usersorder"> Manage Orders</Link>
                        <Link className="btn btn-light shadow" to = "/dashboard/allproductslist">Manange Products</Link>
                        <Link className="btn btn-light shadow" to = "/dashboard/users">Manage Users</Link>
                        <Link className="btn btn-light shadow" to = "/dashboard/category">Manage Category</Link>
                   </div>
                </div>
                <div className="col-lg-9">
                    <Profile />
                </div>


            </div>
           
        </div>

    );
}

export default AdminDashboard;