import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/auth';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import BackToLoginSpinner from './spinner/BackToLoginSpinner';

const PrivateRoute=()=>{
const [ok,setOk]=useState(false);
const [auth,setAuth]=useAuth();

useEffect(()=>{
const checkAuth = async()=>{
    const resp=await axios('http://localhost:5000/api/user/profile',{
                headers:{Authorization:`Bearer ${auth?.token}`}
            })
            console.log(resp)
            if(resp.data){
                setOk(true)
            }else{
            setOk(false)
        }
};
if(auth?.token) checkAuth();

},[auth?.token])

  return ok? <Outlet/>:<BackToLoginSpinner/> ;
}
export default PrivateRoute;