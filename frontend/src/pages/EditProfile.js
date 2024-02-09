import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, CardImg, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../context/auth';
function EditProfile() {
    const [auth, setAuth] = useAuth();
    const [user, setUser] = useState({
        name: '', email: '', username: '', address: {
            pincode: '', buildingnameno: '', area: '', landmark: '', city: '', state: ''
        }, password: ''
    });
    useEffect(() => {
        const { name, email, username, address, password } = auth?.user
        setUser({
            name: auth.user.name, email: auth.user.email, username: auth.user.username,
            address: {
                pincode: address?.pincode || '',
                buildingnameno: address?.buildingnameno || '',
                area: address?.area || '',
                landmark: address?.landmark || '',
                city: address?.city || '',
                state: address?.state || ''
            }
        })
    }, [auth?.user])

    const subminHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.put('http://localhost:5000/api/user/profile',
                user,
                {
                    headers: { Authorization: `Bearer ${auth?.token}` }
                });
            console.log(data);
            if (data?.error) {
                toast.error(data?.error)
            }
            else {
                setAuth({ ...auth, user: data?.updateuser })
                let storage = localStorage.getItem("auth");
                storage = JSON.parse(storage);
                storage.user = data.updateuser;
                localStorage.setItem("auth", JSON.stringify(storage));
                toast.success("profile updated Succesfully")
            }
        } catch (error) {
            console.log(error);
            toast.error("something went wrong");

        }
    }
    return (
        // Edit profile
        <div className="container">
            <div className="my-3 text-center">
                <h2>
                    User Profile
                </h2>
            </div>
            <Row className='d-flex justify-content-center mt-2 align-items-center'>
                <Col lg={4} className='mx-auto'>
                    <Card className='shadow' >
                        <Card.Body>
                            <Form className='mb-3' onSubmit={subminHandler}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type='text'
                                        placeholder='John Doe'
                                        value={user.name}
                                        onChange={(e) => setUser({ ...user, name: e.target.value })} />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type='email'
                                        placeholder='john.doe@gmail.com'
                                        value={user.email}
                                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                                        disabled
                                    />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type='text'
                                        placeholder='johndoe1'
                                        value={user.username}
                                        onChange={(e) => setUser({ ...user, username: e.target.value })} />
                                </Form.Group>
                                <Row className='g-1'>
                                    <Col lg={10}>  <Form.Group className='mb-4'>
                                        <Form.Label>Address</Form.Label>
                                        <Card className='p-2'>
                                            {user.address.buildingnameno} {user.address.area},
                                            &nbsp;{user.address.landmark}, {user.address.city}, {user.address.pincode} {user.address.state}
                                        </Card>
                                    </Form.Group>
                                    </Col>
                                    <Col lg={2} className='d-flex justify-content-center align-items-center mb-3'>
                                        <Link className='btn btn-light btn-sm mt-4 rounded-circle py-2' to="/dashboard/address"><i class="fas fa-pencil-alt fa-lg"></i>
                                        </Link>
                                    </Col>
                                </Row>

                                <Form.Group className='mb-4'>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type='password'
                                        placeholder='Change Password'
                                        value=''
                                        onChange={(e) => setUser({ ...user, password: e.target.value })} />
                                </Form.Group>
                                <div className="d-grid gap-2">
                                    <Button className='btn btn-secondary shadow-sm rounded-2' type='submit' >
                                        Update
                                    </Button>
                                </div>

                            </Form>
                        </Card.Body>

                    </Card>


                </Col>
            </Row>
        </div>


    );
}

export default EditProfile;