import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/cart';
import { Badge } from "antd";
import { useAuth } from '../context/auth';
import LOGO from "../img/logo.png"

const Navbar = () => {
    const [auth, setAuth] = useAuth();
    const [cart] = useCart()
    const handleLogout = () => {
        setAuth({
            ...auth,
            user: null,
            token: ""
        });
        localStorage.removeItem("auth");
    }
    return (
        // navbar
        <div><nav className="navbar navbar-expand-lg bg-primary fixed-top pb-2 pb-3">
            <div className="container-fluid">
                {/* logo */}
                <Link className="text-decoration-none border p-1 rounded-4 bg-light shadow mx-3" to="/">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className='pe-2'>
                            <img src={LOGO} style={{ height: 55 }} alt="logo" />
                        </div>
                        <div>
                            <span className="fs-5 text-dark fw-bold">
                                ZEMO STRORE
                            </span><br />
                            <span className="fs-6 fw-bold">
                                Apka <span className="text-warning">Apna</span> bazar
                            </span>
                        </div>
                    </div>
                </Link>
                {/* cart button only except for the large screen */}
                <Badge count={cart?.length} showZero size="default" className='ms-auto me-3 d-lg-none'>
                    <Link className="btn rounded-2 p-2 shadow btn-light  fs-6 " to="/cart">
                        <i className="fas fa-shopping-cart fa-lg"></i>
                    </Link>
                </Badge>

                <button className="navbar-toggler my-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div>
                        <ul className="navbar-nav me-auto ms-3 mb-2 mb-lg-0">
                            <li className="nav-item">
                                {
                                    auth?.user?.address?.pincode ? (
                                        <>
                                            <Link className="text-decoration-none" to="/dashboard/address">
                                                <div className="d-flex justify-content-center align-items-center border py-1 px-2 rounded-4 bg-light shadow ">
                                                    <div className="logo fs-4 pe-2 text-dark">
                                                        <i className="fas fa-map-marker-alt fa-lg"></i>
                                                    </div>
                                                    <div>
                                                        <span className=" text-dark" style={{ fontSize: 14 }}>
                                                            Deliver to {auth?.user?.name}
                                                        </span> <br />
                                                        <span className="fw-bold fs-5 text-dark">
                                                            {auth?.user?.address?.city} {auth?.user?.address?.pincode}
                                                        </span>
                                                    </div>
                                                </div>

                                            </Link>
                                        </>
                                    ) : ('')
                                }

                            </li>

                        </ul>
                    </div>

                    <form className="d-flex w-50 mx-auto my-3" role="search">
                        <input className="form-control me-2 w-100 rounded-5 shadow border-0" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-transparent " style={{ margin: "3px 0px 0px -60px" }} type="submit"><i className="fas fa-search fa-lg"></i>
                        </button>
                    </form>
                    <div className='mx-auto'>
                        {
                            !auth.user ? (<>  <Link className="btn rounded-5 shadow btn-warning m-1" to="/login">
                                Login
                            </Link></>) : (<>
                                <Link className="btn rounded-5 shadow btn-warning m-1" to="/dashboard">
                                    Dashboard
                                </Link>
                                <Link className="btn rounded-5 shadow btn-light fs-6 ms-2 p-2" onClick={handleLogout}
                                    to="/login">
                                    <i className="fas fa-power-off fa-lg"></i>
                                </Link>
                            </>)
                        }


                        {/* cart button only disply on the large screen */}
                        <Badge count={cart?.length} showZero size="default" className='mx-3 d-none d-lg-inline'>
                            <Link className="btn rounded-2 p-2 shadow btn-light  fs-6 " to="/cart">
                                <i className="fas fa-shopping-cart fa-lg"></i>
                            </Link>
                        </Badge>

                    </div>


                </div>
            </div>
        </nav>
        </div>
    )
}

export default Navbar