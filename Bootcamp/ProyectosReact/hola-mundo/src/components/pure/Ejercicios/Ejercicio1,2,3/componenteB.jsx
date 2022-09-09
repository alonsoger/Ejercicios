import React, { useState } from "react";
import { Contacto } from "../../../../models/contacto.class";
import PropTypes from "prop-types";

const ComponenteB = ({ contacto, conectado, remove }) => {
  //Funcion si el usuario esta conectado o no. Nuestra otro color
function contactoConectado() {
    if (contacto.conectado) {
        return (
            <i
                onClick={() => conectado(contacto)}
                className="bi bi-balloon task-action"
                style={{ color: "green", fontWeight: "bold" }}
            ></i>
        );
    } else {
        return (
            <i
            onClick={() => conectado(contacto)}
            className="bi bi-balloon task-action"
            style={{ color: "red", fontWeight: "bold" }}
            ></i>
        );
        }
    }
    return (
    <tr className="fw-normal">
        <td> {contacto.nombre} </td>
        <td> {contacto.apellido} </td>
        <td> {contacto.email} </td>
        <td>
            {contactoConectado()}
            <i
            className="bi-trash task-action"
            style={{ color: "red", fontSize: "40px" }}
            onClick={() => remove(contacto)}
            ></i>
        </td>
    </tr>
    );
};

ComponenteB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto),
};

export default ComponenteB;
