import { ToastContainer } from "react-toastify";
import "./App.css"
import Register from "./pages/Register";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/user/Dashboard";
import Profile from "./pages/Profile";
import AddProduct from "./pages/admin/addProduct";
import Products from "./pages/products";
import ProductDetails from "./pages/ProductDetails";
import AllProductList from "./pages/admin/AllProductList";
import EditProduct from "./pages/admin/EditProduct";
import CartPage from "./pages/CartPage";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminRoute from "./components/AdminRoute";
import { useAuth } from "./context/auth";
import AllUsers from "./pages/admin/AllUsers";
import EditProfile from "./pages/EditProfile";
import Payment from "./pages/Payment";
import Order from "./pages/user/Order";
import AddAddress from "./pages/AddAddress";
// import AddCategory from "./pages/admin/AddCategory";
import AllCategory from "./pages/admin/AllCategory";
import AllOrders from "./pages/admin/AllOrders";


function App() {
  const [auth] = useAuth()
  return (
    <Router>
      <Navbar />
      <div className="container-fluid mt-5 pt-5">
        <ToastContainer style={{
          marginTop: 60
        }} />
        <Routes >
          <Route path='/' element={<Products />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {auth?.user?.isAdmin ?
            <Route path="/dashboard" element={<AdminRoute />} >
              <Route path="" element={<AdminDashboard />} />
              <Route path="/dashboard/profile" element={<Profile />} />
              <Route path="/dashboard/addproduct" element={<AddProduct />} />
              <Route path='/dashboard/allproductslist' element={<AllProductList />} />
              <Route path="/dashboard/editproduct/:id" element={<EditProduct />} />
              <Route path="/dashboard/users" element={<AllUsers />} />
              <Route path="/dashboard/updateprofile" element={<EditProfile />} />
              <Route path="/dashboard/address" element={<AddAddress />} />
              <Route path="/dashboard/category" element={<AllCategory />} />
              <Route path="/dashboard/order" element={<AllOrders />} />
            </Route>
            :
            <Route path="/dashboard" element={<PrivateRoute />} >
              <Route path="" element={<Dashboard />} />
              <Route path="/dashboard/profile" element={<Profile />} />
              <Route path="/dashboard/updateprofile" element={<EditProfile />} />
              <Route path="/dashboard/order" element={<Order />} />
              <Route path="/dashboard/address" element={<AddAddress />} />
            </Route>
          }
          <Route path="/payment" element={<PrivateRoute />} >
            <Route path="" element={<Payment />} />
          </Route>

          <Route path='/cart' element={<CartPage />} />
          <Route path='/details/:id' element={<ProductDetails />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
