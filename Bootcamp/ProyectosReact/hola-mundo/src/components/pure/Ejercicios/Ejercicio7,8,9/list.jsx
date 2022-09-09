import React, { useEffect, useState, useRef } from "react";
import { Contacto } from "../../../../models/contacto.class";
import ComponenteB from "../Ejercicio1,2,3/componenteB";

const List = () => {
    
    const defaultContact = new Contacto("German", "Alonso", "Email", false);
    
    const nameRef = useRef('');
    const surnameRef = useRef('');
    const emailRef = useRef('');


    const [contactos, setContacto] = useState([defaultContact]);

  // useEffect(() => {
  //    console.log('')
  //     return () => {
  //         cleanup
  //     };
  // }, [input]);

    function crearContact(contacto) {
        const index = contactos.indexOf(contacto);
        const tempContact = [...contactos];
        tempContact.push(contacto);
        setContacto(tempContact)
    }

    function deleteContact(contacto) {

    }

    function conectado(contacto) {
    console.log("Contacto");
    const index = contactos.indexOf(contacto);
    const tempContact = [...contactos];
    tempContact[index].conectado = !tempContact[index].conectado;

    }

    return (
    <div>
        <div className="card">
            <div className="card-header p-3">
                <h5>YOUR CONTACTS:</h5>
            </div>
            <div
                className="card-body"
                data-mdb-perfect-scrollbar="true"
                style={{ position: "relative", height: "400px" }}
            >
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
                        <ComponenteB contacto= {defaultContact}></ComponenteB>
                    </tbody>
                </table>
            </div>
            <div
                className="card-body"
                data-mdb-perfect-scrollbar="true"
                style={{ position: "relative", height: "400px" }}
            >
                <form onSubmit={ crearContact } className='d-flex justify-content-center align-items-center mb-4'>
                    <div className='form-outline flex-fill'>
                        <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Name'></input>
                        <input ref={surnameRef} id='inputSurname' type='text' className='form-control form-control-lg' required placeholder='Surname'></input>
                        <input ref={emailRef} id='inputEmail' type='text' className='form-control form-control-lg' required placeholder='Email'></input>
                    </div>
                    <button type='submit' className='btn btn-success btn-lg ms-2'>Add</button>
                </form>
            </div>
        </div>
    </div>
    );
};

export default List;
