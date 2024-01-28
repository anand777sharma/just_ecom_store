import React, { useEffect, useState } from 'react'
import { useCart } from '../context/cart'
import { useAuth } from '../context/auth'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import DropIn from "braintree-web-drop-in-react";
import axios from "axios";
import LoadingSpinner from '../components/spinner/LoadingSpinner';

const Payment = () => {

  const [cart, setCart] = useCart();
  const [auth, setAuth] = useAuth();
  // ------------------------payment----------//
  const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState("");
  const [loading, setLoading] = useState(false);
  // ------------------------payment----------//



  const navigate = useNavigate();

  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        total = total + item.price*item.q;
      })
      return total;
    } catch (error) {
      console.log(error);
    }
  }


  //get payment gateway token
  const getToken = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/payment/braintree/token");
      setClientToken(data?.clientToken);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getToken();
  }, [auth?.token]);

  //handle payments
  const handlePayment = async () => {
    try {
      setLoading(true);
      const { nonce } = await instance.requestPaymentMethod();
      const { data } = await axios.post("http://localhost:5000/api/payment/braintree/payment", {
        nonce,
        cart,
      }, {
        headers: { Authorization: `Bearer ${auth?.token}` }
      });
      setLoading(false);
      localStorage.removeItem("cart");
      setCart([]);
      navigate("/dashboard/order");
      toast.success("Payment Completed Successfully ");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className='mt-3'>
      <div className="card">
        <div className="card-body">
          <div className="row mx-auto" style={{ maxWidth: "1200px" }}>
            <div className="col-lg-8">
              <div className="card mb-2 shadow border-0 rounded-3">
                <div className="card-body">
                  <div className="row align-items-center">

                    {!auth?.user?.address?.pincode || !auth?.user?.address?.area || !auth?.user?.address?.buildingnameno || !auth?.user?.address?.city || !auth?.user?.address?.state || !auth?.user?.address?.landmark ? (<>
                      <div className="col-lg-11 col-md-11 col-sm-11 text-center">
                        <p className="text-danger fs-5 ">
                          Complete Address is rqeuire for cheackout
                        </p>
                      </div>
                    </>) : (<>
                      <div className="col-lg-1 col-md-1 col-sm-1"><p>1</p></div>
                      <div className="col-lg-3 col-md-2 col-sm-3"><p>Delivery Address</p></div>
                      <div className="col-lg-7 col-md-8 col-sm-7"><p>{auth?.user?.name} <br />
                        {auth?.user?.address?.buildingnameno} <br /> {auth?.user?.address?.area} <br /> near {auth?.user?.address?.landmark} &nbsp;
                        {auth?.user?.address?.city} {auth?.user?.address?.state} {auth?.user?.address?.pincode}
                      </p>
                      </div>
                    </>)}

                    <div className="col-lg-1 col-md-1 col-sm-1">

                      <Link className='btn btn-light btn-sm mt-4 rounded-circle py-2' to="/dashboard/address"><i class="fas fa-pencil-alt fa-lg"></i>
                      </Link>
                      <p>Edit</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-2 shadow border-0 rounded-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-1 col-md-1 col-sm-1"><p>2</p></div>
                    <div className="col-lg-11 col-md-11 col-sm-11"><p>Payment method</p>
                      {/* dropin  */}
                      <div className="mt-2 text-center card p-3">
                        {!clientToken || !cart?.length ?
                          (
                            <>
                              <LoadingSpinner />
                            </>
                          )
                          :
                          (
                            <>
                              <DropIn
                                options={{
                                  authorization: clientToken,
                                  paypal: {
                                    flow: "vault",
                                  },
                                }}
                                onInstance={(instance) => setInstance(instance)}
                              />

                            </>
                          )}
                      </div>
                      {/* dropin  */}
                    </div>
                  </div>


                </div>
              </div>
              <div className="card mb-2 shadow border-0 rounded-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-1 col-md-1 col-sm-1"><p>3</p></div>
                    <div className="col-lg-11 col-md-11 col-sm-11"><p>Review items and delivery</p>
                      <table class="table">
                        <tbody>
                          {cart?.map((p, i) => (
                            <tr key={i}>
                              <th scope="row">{i + 1}</th>
                              <td><img src={`http://localhost:5000/uploads/${p.picture.split('\\')[1]}`}
                                alt={p.name} height={60} /></td>
                              <td>{p.name} <br />{p.discription}</td>
                              <td>Quantity({p?.q})</td>
                            </tr>
                          ))
                          }
                        </tbody>
                      </table>
                    </div>
                  </div>

                </div>
              </div>

              {/* <div className="text-center card p-3">
                {auth?.user?.address.pincode ? (
                  <>
                    <div className="mb-3">
                      <h4>Current Address</h4>
                      <h5>{auth?.user?.address.pincode}</h5>
                      <button
                        className="btn btn-outline-warning"
                        onClick={() => navigate("/dashboard/updateprofile")}
                      >
                        Update Address
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="mb-3">
                    {auth?.token ? (
                      <button
                        className="btn btn-outline-warning"
                        onClick={() => navigate("/dashboard/updateprofile")}
                      >
                        Update Address
                      </button>
                    ) : (
                      <button
                        className="btn btn-outline-warning"
                        onClick={() =>
                          navigate("/login", {
                            state: "/cart",
                          })
                        }
                      >
                        Plase Login to checkout
                      </button>
                    )}
                  </div>
                )}
              </div> */}
              {/* dropin  */}
              <div className="mt-2 text-center card p-3 shadow rounded-3">
                {!clientToken || !cart?.length ?
                  (
                    <>
                      <LoadingSpinner />
                    </>
                  )
                  :
                  (
                    <>
                      <button
                        className="btn btn-warning rounded-5 shadow"
                        onClick={handlePayment}
                        disabled={loading || !instance || !auth?.user?.address?.pincode || !auth?.user?.address?.area || !auth?.user?.address?.buildingnameno || !auth?.user?.address?.city || !auth?.user?.address?.state || !auth?.user?.address?.landmark}
                      >
                        {loading ? "Processing ...." : "Make Payment"}
                      </button>
                      {!auth?.user?.address?.pincode || !auth?.user?.address?.area || !auth?.user?.address?.buildingnameno || !auth?.user?.address?.city || !auth?.user?.address?.state || !auth?.user?.address?.landmark ? (<>
                        <p className="text-danger">
                          First fill the Address
                        </p>
                      </>) : ('')}
                      {/* {(instance==="")? (<>
                        <p className="text-danger">
                          First fill the Address
                        </p>
                      </>) : ('')} */}
                    </>
                  )}
              </div>
              {/* dropin  */}
            </div>
            <div className="col-lg-4">
              <div className="card shadow rounded-3">
                <div className="card-body">
                  <p className="h4">
                    Order Summary
                  </p>
                  <hr />
                  <table class="table">

                    <tbody>
                      <tr className=''>
                        <td>items:</td>
                        <td>₹ {totalPrice()}</td>
                      </tr>
                      <tr className='border-dark'>
                        <td>Delivery:</td>
                        <td>₹ 89</td>
                      </tr>
                      <tr className='fs-4 fw-bold border-dark' >
                        <td style={{ color: "#cc0c39" }}>OrderTotal:</td>
                        <td style={{ color: "#cc0c39" }}>₹ {totalPrice() + 89}</td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>
              {/* dropin  */}
              <div className="mt-2 text-center card p-3 shadow rounded-3">
                {!clientToken || !cart?.length ?
                  (
                    <>
                      <LoadingSpinner />
                    </>
                  )
                  :
                  (
                    <>
                      <button
                        className="btn btn-warning rounded-5 shadow"
                        onClick={handlePayment}
                        disabled={loading || !instance || !auth?.user?.address?.pincode || !auth?.user?.address?.area || !auth?.user?.address?.buildingnameno || !auth?.user?.address?.city || !auth?.user?.address?.state || !auth?.user?.address?.landmark}
                      >
                        {loading ? "Processing ...." : "Make Payment"}
                      </button>
                      {!auth?.user?.address?.pincode || !auth?.user?.address?.area || !auth?.user?.address?.buildingnameno || !auth?.user?.address?.city || !auth?.user?.address?.state || !auth?.user?.address?.landmark ? (<>
                        <p className="text-danger">
                          First fill the Address
                        </p>
                      </>) : ('')}
                    </>
                  )}
              </div>
              {/* dropin  */}

            </div>
          </div>
        </div>
      </div>




    </div>
  )
}

export default Payment