import React, { useState } from 'react';
import { Contacto } from '../../../../models/contacto.class';
import PropTypes from 'prop-types';

const ComponenteB = ({ contacto }) => {

    const [conectado, setConected] = useState(true);

    const changeState = () => {
        setConected();
    }
    //Funcion si el usuario esta conectado o no. Nuestra otro color
    function contactoConectado() {
        if(Contacto.conectado){
            return (<i onClick={() => conectado(contacto)} className='bi bi-balloon task-action' style={{color: 'green', fontWeight: 'bold'}} ></i>)
        }else {
            return (<i onClick={() => conectado(contacto)} className='bi bi-balloon task-action' style={{color: 'red', fontWeight: 'bold'}} ></i>)
    }}
    return (
        <div>
            <td> { contacto.nombre } </td>
            <td> { contacto.apellido } </td>
            <td> { contacto.email } </td>
            <td> {contactoConectado()} </td>
            <div>
                <button onClick={changeState}></button>
            </div>
        </div>
    );
};

ComponenteB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ComponenteB;
