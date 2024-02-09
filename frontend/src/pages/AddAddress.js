import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, CardImg, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../context/auth';
function AddAddress() {
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
                state: address?.state || ''}
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
                toast.success("Address updated Succesfully")
            }
        } catch (error) {
            console.log(error);
            toast.error("something went wrong");

        }
    }
    return (
        // add Address
        <div className="container">
            <div className="my-3 text-center">
                <h2>
                    Address
                </h2>
            </div>
            <Row className='d-flex justify-content-center mt-2 align-items-center'>
                <Col lg={4} className='mx-auto'>
                    <Card className='shadow' >
                        <Card.Body>
                            <Form className='mb-3' onSubmit={subminHandler}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Pincode</Form.Label>
                                    <Form.Control type='number'
                                        placeholder='6-digit [0-9] pincode'
                                        value={user.address.pincode}
                                        onChange={(e) => setUser({ ...user, address: { ...user.address, pincode: e.target.value } })} />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label>flate, house no., building, company, apartment</Form.Label>
                                    <Form.Control type='text'
                                        placeholder=''
                                        value={user.address.buildingnameno}
                                        onChange={(e) => setUser({ ...user, address: { ...user.address, buildingnameno: e.target.value } })}

                                    />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Area, Street, Sector, Village</Form.Label>
                                    <Form.Control type='text'
                                        placeholder=''
                                        value={user.address.area}
                                        onChange={(e) => setUser({ ...user, address: { ...user.address, area: e.target.value } })} />
                                </Form.Group>
                                <Form.Group className='mb-4'>
                                    <Form.Label>Landmark</Form.Label>
                                    <Form.Control type='text'
                                        placeholder='E.g. near appolo hospital'
                                        value={user.address.landmark}
                                        onChange={(e) => setUser({ ...user, address: { ...user.address, landmark: e.target.value } })} />
                                </Form.Group>
                                <Row>
                                    <Col> <Form.Group className='mb-4'>
                                        <Form.Label>Town/city</Form.Label>
                                        <Form.Control type='text'
                                            placeholder=''
                                            value={user.address.city}
                                            onChange={(e) => setUser({ ...user, address: { ...user.address, city: e.target.value } })} />
                                    </Form.Group></Col>
                                    <Col> <Form.Group className='mb-4'>
                                        <Form.Label>State</Form.Label>
                                        <Form.Control type='text'
                                            placeholder=''
                                            value={user.address.state}
                                            onChange={(e) => setUser({ ...user, address: { ...user.address, state: e.target.value } })} />
                                    </Form.Group></Col>
                                </Row>

                                <div className="d-grid gap-2">
                                    <Button className='btn btn-secondary shadow-sm rounded-2' type='submit' >
                                        Update Address
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

export default AddAddress;