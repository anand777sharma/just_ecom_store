import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Seeddata = () => {
    const [count, setCount] = useState(2);
    const navigate = useNavigate();

    const seedData = async () => {
        try {
           const resp= await axios.post('http://localhost:5000/api/product/seedproduct');
            toast.success(resp.data.message);
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        seedData()
        const interval = setInterval(() => {
            setCount((prevValue) => --prevValue);
        }, 1000);
        count === 0 &&
            navigate("/", {

            });
           
        return () => clearInterval(interval);
    }, [count, navigate]);

    return (
        // seeding data
        <div>
            <div className="d-flex flex-column justify-content-center align-items-center"
                style={{ height: "90vh" }}>
                <div className="display-4 mb-5">
                    message
                </div>

                <div className="spinner-border display-4 text-secondary" role="status" style={{ height: 100, width: 100 }}>
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    )
}

export default Seeddata