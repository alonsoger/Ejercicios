import React, { useState } from 'react';
import { Contacto } from '../../../models/contacto.class';
import PropTypes from 'prop-types';

const ComponenteB = ({ contacto }) => {

    const [conectado, setConected] = useState(true);

    const changeState = () => {
        setConected();
    }

    return (
        <div>
            <h2> { contacto.nombre } </h2>
            <h3> { contacto.apellido } </h3>
            <h4> { contacto.email } </h4>
            <h5> { conectado ? 'Contacto En Linea':'Contacto No Disponible' } </h5>
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
