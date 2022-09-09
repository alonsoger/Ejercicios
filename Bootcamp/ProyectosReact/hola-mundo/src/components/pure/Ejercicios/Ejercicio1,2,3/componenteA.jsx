import React, { useState } from 'react';
import { Contacto } from '../../../../models/contacto.class';
import List from '../Ejercicio1,2,3/Ejercicio7,8,9/list'
import ComponenteB from './componenteB';



const ComponenteA = () => {

    const miContacto = new Contacto('German', 'Alonso', 'Email', true);

    const [contactos, setContacto] = useState([miContacto]);

    function crearContact(contacto) {
        const index = contactos.indexOf(contacto);
        const tempContact = [...contactos];
        tempContact.push(contacto);
        setContacto(tempContact)
    }

    function deleteContact(contacto) {
        const index = contactos.indexOf(contacto);
        const tempContact = [...contactos];
        tempContact.splice(index, 1);
        setContacto(tempContact)

    }

    function conectado(contacto) {
    console.log("Contacto");
    const index = contactos.indexOf(contacto);
    const tempContact = [...contactos];
    tempContact[index].conectado = !tempContact[index].conectado;

    setContacto(tempContact);

    }

    return (
        <div>
        <div className='col-12'>
            <div className='card'>
                <div className='card-header p-3'>
                    <h5>YOUR CONTACTS:</h5>
                </div>
                <div className='card-body' 
                    data-mdb-perfect-scrollbar='true' 
                    style={{position: 'relative', height: '400px'}}> 
                    <table>
                        <thead>
                            <tr>
                                <th scoper="col">Name</th>
                                <th scoper="col">Surname</th>
                                <th scoper="col">Email</th>
                                <th scoper="col">Conectado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contactos.map((contacto, index) => {
                                    return (
                                        <ComponenteB
                                            key={index}
                                            contacto={ contacto }
                                            conectado= { conectado }
                                            remove={ deleteContact }
                                        ></ComponenteB>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <List add={crearContact}></List>
    </div>
    );
};

export default ComponenteA;

