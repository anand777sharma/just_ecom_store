import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../context/auth';
function Profile() {
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();
    return (
        // profile 
        <div className='card'>
            <div className="card-body">
                <div className="row ">
                    <div className="col-lg-2">
                        <h3>Name : </h3>
                        <h3>UserName :  </h3>
                        <h3>Email : </h3>
                        <h3>Address : </h3>
                    </div>
                    <div className="col-lg-6">
                        <h3>{auth?.user?.name}</h3>
                        <h3>{auth?.user?.username}</h3>
                        <h3>{auth?.user?.email}</h3>
                        <h3><p>
                            {auth?.user?.address?.buildingnameno} <br /> {auth?.user?.address?.area} <br /> near {auth?.user?.address?.landmark} &nbsp;
                            {auth?.user?.address?.city} {auth?.user?.address?.state} {auth?.user?.address?.pincode}
                        </p></h3>
                    </div>
                    <div className="col-lg-2">
                        <div >
                            <Link className='btn btn-light btn-sm mt-4 rounded-circle py-2' to="/dashboard/updateprofile"><i class="fas fa-pencil-alt fa-lg"></i>
                            </Link>
                            <p>Edit</p>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
}

export default Profile;