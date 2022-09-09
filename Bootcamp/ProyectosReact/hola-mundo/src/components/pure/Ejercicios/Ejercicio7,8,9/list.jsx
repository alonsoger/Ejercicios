import React, { useEffect, useState, useRef } from "react";
import { Contacto } from "../../../../models/contacto.class";
import PropTypes from 'prop-types'

const List = ({ add }) => {
    
    const nameRef = useRef('');
    const surnameRef = useRef('');
    const emailRef = useRef('');

    function addContact(e){
        e.preventDefault();
        const newContact = new Contacto(
            nameRef.current.value,
            surnameRef.current.value,
            emailRef.current.value,
            false
        );
        add(newContact);
    }



    return (
        <form onSubmit={ addContact } className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Name'></input>
                <input ref={surnameRef} id='inputSurname' type='text' className='form-control form-control-lg' required placeholder='Surname'></input>
                <input ref={emailRef} id='inputEmail' type='text' className='form-control form-control-lg' required placeholder='Email'></input>
            </div>
            <button type='submit' className='btn btn-success btn-lg ms-2'>Add</button>
        </form>
    );
};

List.propTypes = {
    add: PropTypes.func.isRequired,
}

export default List;
