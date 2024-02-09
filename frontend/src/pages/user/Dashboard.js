import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Profile from '../Profile';

function Dashboard() {

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('token') === undefined)
            navigate('/login');
    }, [])
    return (
        // Dashboard
        <div className="container-fluid">
            <h1 className='text-center mb-3 mt-2'>
                My Dashboard
            </h1>
            <div className="row g-3">
                <div className="col-lg-3">
                    <div className="d-grid gap-2">
                        <Link className="btn btn-light shadow" to = "/dashboard/order">Orders</Link>
                        <Link className="btn btn-light shadow" to = "/dashboard/updateprofile">Edit Profile</Link>
                    </div>
                </div>
                <div className="col-lg-9">
                    <Profile />
                </div>

            </div>

        </div>

    );
}

export default Dashboard;