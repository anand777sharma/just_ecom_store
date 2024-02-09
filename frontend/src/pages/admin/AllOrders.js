import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import moment from "moment";
import { Select } from "antd";
import { useAuth } from '../../context/auth';
const { Option } = Select;

function AllOrders() {

  const navigate = useNavigate();

  const [status, setStatus] = useState([
    "Not Process",
    "Processing",
    "Shipped",
    "deliverd",
    "cancel",
  ]);
  const [changeStatus, setCHangeStatus] = useState("");
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();
  const getOrders = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/order/all-orders",{
        headers: { Authorization: `Bearer ${auth?.token}` }
      });
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

  const handleChange = async (orderId, value) => {
    try {
      const { data } = await axios.put(`http://localhost:5000/api/order/order-status/${orderId}`, {
        status: value,
      }, {
        headers: { Authorization: `Bearer ${auth?.token}` }
      });
      getOrders();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // All order component
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

          <div className="col-md-9">
            <h1 className="text-center">Manange All Orders</h1>
            {orders?.map((o, i) => {
              return (
                <div className="border shadow">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Status</th>
                        <th scope="col">Buyer</th>
                        <th scope="col"> date</th>
                        <th scope="col">Payment</th>
                        <th scope="col">Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{i + 1}</td>
                        <td>
                          <Select
                            bordered={false}
                            onChange={(value) => handleChange(o._id, value)}
                            defaultValue={o?.status}
                          >
                            {status.map((s, i) => (
                              <Option key={i} value={s}>
                                {s}
                              </Option>
                            ))}
                          </Select>
                        </td>
                        <td>{o?.buyer?.name}</td>
                        <td>{moment(o?.createAt).fromNow()}</td>
                        <td>{o?.payment.success ? "Success" : "Failed"}</td>
                        <td>{o?.products?.length}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="container">
                    {o?.products?.map((p, i) => (
                      <div className="row mb-2 p-3 card flex-row" key={p._id}>
                        <div className="col-md-2">
                          <img
                            src={p.picture}
                            className=""
                            alt={p.name}
                          
                            height={"100px"}
                          />
                        </div>
                        <div className="col-md-8">
                          <p>{p.name}</p>
                          <p>{p.description.substring(0, 30)}</p>
                          <p>Price : {p.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>


      </div>

    </div>

  );
}

export default AllOrders;