import axios from 'axios';
import React, { useState } from 'react';
import { Button,Form} from 'react-bootstrap';
import { useAuth } from '../../context/auth';
// import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
function AddCategory() {
    const [auth]=useAuth()
    const [category, setCategory] = useState({ categoryname: '' });
    const subminHandler = async (e) => {
        e.preventDefault();
        try {
            const resp = await axios.post('http://localhost:5000/api/category/createcotegory', category, {
                headers:{Authorization:`Bearer ${auth?.token}`}
            });
            console.log(resp);
            if (resp.status === 201) {
                toast.success(resp.data.message);
                setCategory({ categoryname: '' });
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);

        }
    }
    return (

        // add category component
        <div className='d-flex justify-content-center mt-3 align-items-center'>

            <Form className='mb-3' onSubmit={subminHandler}>
                <Form.Group className='mb-3'>
                    <Form.Control type='text'
                        placeholder='Enter Category Name...'
                        value={category.categoryname}
                        onChange={(e) => setCategory({ ...category, categoryname: e.target.value })} />
                </Form.Group>

                <div className="d-grid gap-2">
                    <Button className='btn btn-secondary shadow-sm rounded-2' type='submit' >
                        Create Category
                    </Button>
                </div>

            </Form>
        </div>

    );
}

export default AddCategory;