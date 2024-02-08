import axios from 'axios';
import React, { useState } from 'react';
import { Button, CardImg, Col, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../context/auth';

function Login() {
    const [user, setUser] = useState({ email: '', password: '' });
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();
    // on submit button click
    const subminHandler = async (e) => {
        e.preventDefault();

        try {
            const resp = await axios.post('http://localhost:5000/api/auth/login', user);
            if (resp.status == 200) {

                setAuth({
                    ...auth,
                    user: resp.data.user,
                    token: resp.data.token
                })
                console.log(resp.data);
                toast.success(resp.data.message);
                localStorage.setItem('auth', JSON.stringify(resp.data));
                navigate('/');
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }
    return (
        // row and colom structure
        <Row className='d-flex justify-content-center mt-5 align-items-center h-75'>
           
            <Col lg={4} className=' rounded-4  p-3 shadow-lg mt-5 '>
                <Form className='mb-3' onSubmit={subminHandler}>
                    <Form.Group className='mb-3'>
                        <Form.Control type='email'
                            placeholder='john.doe@gmail.com'
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })} />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Control type='password'
                            placeholder='secret'
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })} />
                    </Form.Group>
                    <div className="d-grid gap-2">
                        {/* submit button */}
                        <Button className='btn btn-secondary shadow-sm rounded-2' type='submit' >
                            Login
                        </Button>
                    </div>

                </Form>
                <p className='mb-3 text-center'>
                    Don't have an account?
                    <Link to="/register">Register Here</Link>
                </p>
            </Col>
        </Row>
    );
}

export default Login;