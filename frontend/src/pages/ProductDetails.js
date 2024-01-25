import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useCart } from '../context/cart'
import { useWish } from '../context/wishlist';
import { useParams } from 'react-router-dom';
import { useAuth } from '../context/auth';
import { toast } from 'react-toastify';

function ProductDetails() {
    const [wish, setWish] = useWish();
    const [cart, setCart] = useCart();
    const [auth, setAuth] = useAuth();
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    const fetchData = async () => {
        try {
            const resp = await axios.get('http://localhost:5000/api/product/getProductId/' + id);
            const Pdata = resp.data;
            setProduct(Pdata);

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])
    console.log(product);

    return (
        <div className='container'>
            <h3>Product details</h3>

            {product &&

                <div className="row g-3">
                    <div className="col-lg-5">
                        <div className="card p-4" >
                            <img src={`http://localhost:5000/${product.picture}`} className="card-img-top py-5" alt="..." />
                        </div>
                    </div>
                    <div className="col-lg-4 " >
                        <div className="card pb-5" >
                            <div className="card-body">
                                <h4 className="card-title">{product.name}</h4>
                                <hr />
                                <span className="rounded-2 p-1 text-light" style={{ background: "#cc0c39" }}>
                                    Limited time offer
                                </span>
                                <br />
                                <br />
                                <p className="card-text">
                                    <span className='fs-5' style={{ color: "#cc0c39" }}>
                                        -{product.discount}Off
                                    </span>
                                    &nbsp;
                                    &nbsp;
                                    <span className="fs-3">
                                        ₹{product.price}
                                    </span> <br />
                                    <span className="fs-6">
                                        M.R.P.: <strike> ₹{product.price}</strike>
                                    </span>  <br />
                                    <span>inclusive of all taxes</span>
                                </p>

                                <ul className="list-group mb-3">
                                    <li className="list-group-item py-3 "><span className='fs-6 fw-bold ' style={{ color: "#cc0c39" }} ><i className=" fas fa-tag fa-lg"> </i>&nbsp;  Save Extra</span>  with 2 Offers</li>
                                    <li className="list-group-item"><span className='fs-6 fw-bold ' style={{ color: "#cc0c39" }} > Cash Back : </span> Earn 10% cashback up to Rs. 50 when you shop for Rs.500 or more using your cradit card.</li>
                                    <li className="list-group-item"><span className='fs-6 fw-bold ' style={{ color: "#cc0c39" }} > Partner Offers:  </span> Get GST invoice and save up to 28% on business purchases.</li>
                                </ul>

                                <ul className="list-group list-group-horizontal mb-3 text-center">
                                    <li className="list-group-item border-0">
                                        <div className='border border-dark text-success rounded-5' style={{ height: 55, width: 55, margin: "auto", display: "flex", justifyContent: "center", alignItems: 'center' }}>
                                            <i class="fas fa-truck fa-lg "></i>
                                        </div>

                                        <span style={{ color: "#007185", fontSize: 15 }} >
                                            free dilivery
                                        </span>

                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className='border border-dark text-success  rounded-circle' style={{ height: 55, width: 55, margin: "auto", display: "flex", justifyContent: "center", alignItems: 'center' }}>
                                            <i class="fas fa-hand-holding-usd fa-lg"></i>
                                        </div>

                                        <span style={{ color: "#007185", fontSize: 15 }} >
                                            pay on dilivery
                                        </span>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className='border border-dark text-success  rounded-circle' style={{ height: 55, width: 55, margin: "auto", display: "flex", justifyContent: "center", alignItems: 'center' }}>
                                            <i class="fas fa-lock fa-lg"></i>
                                        </div>

                                        <span style={{ color: "#007185", fontSize: 15 }} >
                                            non returnable
                                        </span>

                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className='border border-dark text-success  rounded-circle' style={{ height: 55, width: 55, margin: "auto", display: "flex", justifyContent: "center", alignItems: 'center' }}>
                                            <i class="fas fa-trophy fa-lg"></i>
                                        </div>

                                        <span style={{ color: "#007185", fontSize: 15 }} >
                                            Top Brand
                                        </span>

                                    </li>
                                </ul>
                                <h5>About this Item</h5>
                                <p className="card-text">{product.description}</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card mb-3">
                            <div className="card-body">
                                <p className="card-text">

                                    <span className="fs-3">
                                        ₹{product.price}
                                    </span> <br />
                                    <span className='' style={{ color: "#007185", fontSize: 16 }}>
                                        FREE dilivery
                                    </span> <br />
                                    <span className='' style={{ fontSize: 14 }}>
                                        Or fastest delivery Today. Order within : <span className='' style={{ color: "#007185", fontSize: 14 }}>
                                            45 mins.
                                        </span>
                                    </span>
                                    <br />
                                    <br />
                                    <span className=" border-0">
                                        <i className="fas fa-map-marker-alt fa-lg"></i>

                                        &nbsp;
                                        &nbsp;
                                        <span style={{ color: "#007185", fontSize: 15 }} >
                                            Diliver to {auth?.user?.name} - {auth?.user?.address.pincode}
                                        </span>

                                    </span>
                                </p>
                                <p className='fs-4 fw-normal' style={{ color: "#007600" }}>In Stock</p>

                                <div className="d-grid gap-2 pb-3">
                                    <button className='btn btn-primary shadow rounded-5'
                                        onClick={() => {
                                            if (cart.some(i => i._id === product._id)) {
                                                toast.error('Item already in cart');
                                            }
                                            else {
                                                const updatedItem = { ...product, q: 1 };
                                                setCart([...cart, updatedItem])
                                                localStorage.setItem("cart", JSON.stringify([...cart, updatedItem]))
                                                toast.success('Item Added to cart');
                                            }

                                        }} >
                                        Add to cart
                                    </button>
                                </div>

                            </div>

                        </div>
                        <div className="card">
                            <div className="card-body">
                                <hr />
                                <div className="d-grid gap-2">
                                    <button className='btn btn-warning shadow rounded-5' type='button'
                                        onClick={() => {
                                            if (wish.some(i => i._id === product._id)) {
                                                toast.error('Item already in Whislist');
                                            }
                                            else {
                                                // const updatedItem = { ...product, q: 1 };
                                                setWish([...wish, product])
                                                localStorage.setItem("wish", JSON.stringify([...wish, product]))
                                                toast.success('Item Added to Whislist');
                                            }

                                        }}  >
                                        Add to wishlist
                                    </button>
                                </div>
                                <hr />
                            </div>
                        </div>

                    </div>
                </div>



            }

        </div>
    );
}

export default ProductDetails;