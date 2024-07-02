import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';
import { formValidation } from './formValidation'; // Uvezi formValidation.jsx
import axios from 'axios';

const initialValues = {
    username: '',
    email: '',
    password: ''
};

export default function Y() {
    const navigate = useNavigate();

    const handleSubmit = async (values, { resetForm }) => {
        try {
            await axios.post('http://localhost:3001/users', values);
            alert('User Created');
            resetForm();
            navigate('/');
        } catch (error) {
            alert('Error creating user');
        }
    };

    return (
        <div className='forma'>
            <h1>Add new User</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={formValidation}
                onSubmit={handleSubmit}
            >
                {({ touched, errors }) => (
                    <Form>
                        <label htmlFor='username'>Username:</label><br />
                        <Field type='text' name='username' /><br />
                        {touched.username && errors.username && (
                            <small>{errors.username}</small>
                        )}
                        <br />

                        <label htmlFor='email'>Email:</label><br />
                        <Field type='email' name='email' /><br />
                        {touched.email && errors.email && (
                            <small>{errors.email}</small>
                        )}
                        <br />

                        <label htmlFor='password'>Password:</label><br />
                        <Field type='password' name='password' /><br />
                        {touched.password && errors.password && (
                            <small>{errors.password}</small>
                        )}
                        <br />

                        <button type='submit'>Add</button>
                        <button type='button' onClick={() => navigate('/')}>Back</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
