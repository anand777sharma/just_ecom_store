import axios from 'axios';
import React, { useState } from 'react';
import { Button, CardImg, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
function Register() {
    const [user, setUser] = useState({ name: '', email: '', username: '', password: '' });
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const resp = await axios.post('http://localhost:5000/api/auth/register', user);
            console.log(resp);
            if (resp.status === 201) {
                toast.success(resp.data.message);
                setUser({ name: '', email: '', username: '', password: '' });
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
          
        }
    }
    return (
        <Row className='d-flex justify-content-center mt-5 align-items-center'>
           
            <Col lg={4} className=' rounded-4  p-3 shadow-lg'>
                <Form className='mb-3' onSubmit={submitHandler}>
                    <Form.Group className='mb-3'>
                        <Form.Control type='text'
                            placeholder='John Doe'
                            value={user.name}
                            onChange={(e) => setUser({ ...user, name: e.target.value })} />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Control type='email'
                            placeholder='john.doe@gmail.com'
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })} />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Control type='text'
                            placeholder='johndoe1'
                            value={user.username}
                            onChange={(e) => setUser({ ...user, username: e.target.value })} />
                    </Form.Group>
                    <Form.Group className='mb-4'>
                        <Form.Control type='password'
                            placeholder='secret'
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })} />
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <Button className='btn btn-secondary shadow-sm rounded-2' type='submit' >
                            Register
                        </Button> 
                        </div>

                </Form>
                <p className='mb-3 text-center'>
                    Already Registered?
                    <Link to="/login" className='text-decoration-none'>Login Here</Link>
                </p>
            </Col>
        </Row>

    );
}

export default Register;