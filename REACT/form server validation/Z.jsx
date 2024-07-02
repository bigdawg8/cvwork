import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { formValidation } from './formValidation';

export default function Z() {
    const [userData, setUserData] = useState({ username: '', email: '', password: '' });
    const navigate = useNavigate();
    const { id } = useParams();

    const getData = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/users/${id}`);
            const { username, email, password } = response.data;
            setUserData({ username, email, password });
        } catch (error) {
            alert('User could not be fetched');
        }
    };

    useEffect(() => {
        getData();
    }, [id]);

    const handleSubmit = async (values) => {
        try {
            await axios.put(`http://localhost:3001/users/${id}`, values);
            alert('User updated successfully');
            navigate('/');
        } catch (error) {
            alert('Error updating user');
        }
    };

    return (
        <>
            <div className='forma'>
                <h1>Update User</h1>
                <Formik
                    enableReinitialize
                    initialValues={userData}
                    validationSchema={formValidation}
                    onSubmit={handleSubmit}
                >
                    {({ touched, errors }) => (
                        <Form>
                            <label htmlFor='username'>Username:</label>
                            <br />
                            <Field type='text' name='username' />
                            <br />
                            {touched.username && errors.username && (
                                <small>{errors.username}</small>
                            )}
                            <br />
                            <label htmlFor='email'>Email:</label>
                            <br />
                            <Field type='email' name='email' />
                            <br />
                            {touched.email && errors.email && (
                                <small>{errors.email}</small>
                            )}
                            <br />
                            <label htmlFor='password'>Password:</label>
                            <br />
                            <Field type='password' name='password' />
                            <br />
                            {touched.password && errors.password && (
                                <small>{errors.password}</small>
                            )}
                            <br />
                            <button type='submit'>Save</button>
                            <button onClick={() => navigate('/')}>Back</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    );
}
