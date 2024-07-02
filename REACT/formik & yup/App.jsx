import React from 'react';
import { Formik, Form, Field } from 'formik';
import { signupValidation } from './signupValidation';

const initialValues = {
    name: '',
    email: '',
    password: '',
    cpassword: ''
};

export default function App() {
    return (
        <>
            <div className='app'>
                <h1>Formik & yup</h1>
                <Formik initialValues={initialValues} validationSchema={signupValidation} onSubmit={(values) => console.log(values)}>
                    {({ errors, touched }) => (
                        <Form>
                            <label htmlFor="name">Name</label><br />
                            <Field type='text' name='name' /><br />
                            {touched.name && errors.name && <small>{errors.name}</small>}<br />

                            <label htmlFor="email">Email</label><br />
                            <Field type='email' name='email' /><br />
                            {touched.email && errors.email && <small>{errors.email}</small>}<br />

                            <label htmlFor="password">Password</label><br />
                            <Field type='password' name='password' /><br />
                            {touched.password && errors.password && <small>{errors.password}</small>}<br />

                            <label htmlFor="cpassword">Confirm Password</label><br />
                            <Field type='password' name='cpassword' /><br />
                            {touched.cpassword && errors.cpassword && <small>{errors.cpassword}</small>}<br />

                            <button type='submit'>Submit</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    );
}
