import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';


const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        
        password: Yup.string()
            .required('Password is required')
    }
);


const LoginFormik = () => {

    const navigate = useNavigate();

    const initialCredentials = {
        email: '',
        password: ''
    }

    return (
        <div>
            <h4>Login Formik</h4>
            <Formik
                // *** Initial values ***
                initialValues = { initialCredentials }
                // *** Yup Validation Schema ***
                validationSchema = {loginSchema}
                // *** onSubmit Event ***
                onSubmit={async (values) =>{
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 1));
                    // We save the data in the localStorage
                    localStorage.setItem('credentials', values);
                }}
            >
                {/* Obtain props from Formik (Para poder trabajar con ellas) */}
                {({
                    value,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur,}) => (
                        <Form>
                            <label htmlFor="email">Email:</label>
                            <Field id="email" type="email" name="email" placeholder="example@email.com" />
                            {/* Emails Errors */}
                            {
                                errors.email && touched.email && 
                                (
                                    <div><ErrorMessage name="email" component="div"></ErrorMessage></div>
                                )
                            }
                            <label htmlFor="password">Password:</label>
                            <Field
                                id="password"
                                name="password"
                                placeholder="Password"
                                type="password"
                            />
                            {/* Password Errors */}
                            {
                                errors.password && touched.password && 
                                (
                                    <ErrorMessage name="password" component="div"></ErrorMessage>
                                )
                            }
                            <button type="submit">Login</button>
                            <button type="submit" onClick={() => navigate('/register')}>Register</button>
                            {isSubmitting ? (<p>Login your credentials...</p>): null}
                        </Form>
                    )}
            </Formik>
        </div>
    );
}

export default LoginFormik;
