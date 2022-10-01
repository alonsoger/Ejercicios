// Fomulario para crear tareas.
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// MODELS
import { Tareas } from './tareas';

const FormularioTask = () => {
    let user = new Tareas();

    const initialValues = {
        name: '',
        description: '',
        complete: false
    }

    const registerSchema = Yup.object().shape({
        name: Yup.string()
            .min(1, 'Name too task')
            .required('Name required'),
        
        description: Yup.string()
            .min(6, 'Description too short')
            .required('Description required'),
    });

    const submit = (value) => {
        alert('Register Task')
    };
    
    return (
        <div>
            <h4>Register Task</h4>
            <Formik
                // *** Initial values ***
                initialValues = { initialValues }
                // *** Yuo validation schema ***
                validationSchema = { registerSchema }
                // *** onSubmit Event ***
                onSubmit = {async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 1));
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
                        {/* ***** NAME ***** */}
                        <label htmlFor='name'>Name:</label>
                        <Field id='name' type='text' name='name' placeholder='Task name'></Field>
                        {/* Errors */}
                        {
                            errors.name && touched.name &&  
                            (
                                <div><ErrorMessage name="name" component="div"></ErrorMessage></div>
                            )
                        }
                        {/* ***** DESCRIPTION ***** */}
                          <label htmlFor='description'>Description:</label>
                        <Field id='description' type='text' name='description' placeholder='Task description'></Field>
                        {/* Errors */}
                        {
                            errors.description && touched.description &&  
                            (
                                <div><ErrorMessage name="description" component="div"></ErrorMessage></div>
                            )
                        }
                        {/* *********************** BOTON ************************ */}
                        <button type="submit">Register Task</button>
                            {isSubmitting ? (<p>Sending your tasks...</p>): null}
                    </Form>
                )
                
                }
            </Formik>

        </div>
    )

}

export default FormularioTask;