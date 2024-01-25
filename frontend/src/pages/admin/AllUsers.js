import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/auth';
const AllUsers = () => {
    const navigate = useNavigate();
    const [auth]=useAuth()
    const [users, setUsers] = useState([]);

    const deleteUser = (id,isAdmin) => {
        if(!isAdmin){
        axios.delete('http://localhost:5000/api/user/deleteuserbyid/' + id , {
            headers:{Authorization:`Bearer ${auth?.token}`}
        });}
        else{
            toast.error("Can not Delete Admin User");
        }
    }
    const fetchData = async () => {
        try {
            const resp = await axios.get('http://localhost:5000/api/user/getalluser', {
                headers:{Authorization:`Bearer ${auth?.token}`}
            });
            setUsers(resp.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData();
    }, [deleteUser])
    console.log( {user:users});
    return (

        <div className="container-fluid">
        <h3 className='text-center my-4 py-2 shadow bg-light rounded-4'>
            Admin Dashboard
        </h3>
        <div className="row g-3">
            <div className="col-lg-3 mt-3">
                <div className="d-grid gap-2">
                    <Link className="btn btn-light shadow" to = "/dashboard">My Profile</Link>
                    <Link className="btn btn-light shadow" to = "/dashboard/order"> Manage Orders</Link>
                    <Link className="btn btn-light shadow" to = "/dashboard/allproductslist">Manange Products</Link>
                    <Link className="btn btn-light shadow" to = "/dashboard/users">Manage Users</Link>
                    <Link className="btn btn-light shadow" to = "/dashboard/category">Manage Category</Link>
               </div>
            </div>
            <div className="col-lg-9">
              
        <div className='container-fluid'>

<div className="text-center text-secondary fw-bold display-6">
    All Users List
</div>
<table className='table table-striped table-bordered text-center mt-3'>
    <thead>
        <tr>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Address</th>
            <th>Is Admin</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        {
            users?.map((item) => (
                <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.address?.pincode}</td>
                    <td>{item.isAdmin?"true":"false"}</td>
                    <td>
                        <button className='btn btn-danger rounded-5 shadow m-1 ' onClick={() => deleteUser(item._id,item.isAdmin)}>delete</button>
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

export default AllUsers;