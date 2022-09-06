import React, { Component, useState, useEffect } from 'react'

export const Clock = () => {
//Estado inicial del componente. 
    const fechaInicial = new Date()
    const personaInicial = {
        nombre: 'Martin',
        edad: 0,
        apellido: 'San Jose'
    };

    const count = 0;

    const [fechaOne, setFechaOne] = useState(fechaInicial);
    const [personaOne, setPersonaOne] = useState(personaInicial);      
    const [contador, setContador] = useState(count);

    useEffect(() => {
        const timerID = setInterval(() => {
            tick();
        }, 1000);
        return () => {
            clearInterval(timerID);
        };
    },);

    const tick = () => {
        setFechaOne(new Date());
        setPersonaOne({
            nombre: 'Martin',
            edad: personaOne.edad + 1,
            apellido: 'San Jose'
        });
    };

    return (
        <div>
            <h2>Hora Actual: {fechaOne.toLocaleTimeString()} </h2>
            <h3> {personaOne.nombre} {personaOne.apellido}</h3>
            <h4>Edad: {personaOne.edad}</h4>
        </div>
    );
}

