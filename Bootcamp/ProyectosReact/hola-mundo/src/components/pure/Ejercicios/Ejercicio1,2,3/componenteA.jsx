import React from 'react';
import { Contacto } from '../../../models/contacto.class';
import ComponenteB from './componenteB';


const ComponenteA = () => {

    const miContacto = new Contacto('German', 'Alonso', 'Email', true);

    return (
        <div>
            <div>
                <h1>YOUR CONTACT: </h1>
            </div>
            <ComponenteB contacto={ miContacto } ></ComponenteB>
        </div>
    );
};

export default ComponenteA;

