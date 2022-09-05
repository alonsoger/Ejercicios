import React, { Component, useState, useEffect } from 'react'

export const Clock = () => {
//Estado inicial del componente. 
    const fechaInicial = new Date()
    const personaInicial = {
        nombre: 'Martin',
        edad: 1,
        apellido: 'San Jose'
    };

    const [fechaOne, setFechaOne] = useState(fechaInicial);
    const [personaOne, setPersonaOne] = useState(personaInicial);      

    useEffect(() => {
        const timerID = setInterval(() => {
            tick()
        }, 1000);
        return () => {
            clearInterval(timerID);
        };
    }, []);

    const tick = () => {
        setFechaOne(new Date()); 
        setPersonaOne({
            edad: personaOne.edad + 1
        })
    };

    return (
        <div>
            <h2>Hora Actual: {fechaOne.toLocaleTimeString()} </h2>
            <h3> {personaInicial.nombre} {personaInicial.apellido}</h3>
            <h4>Edad: {personaInicial.edad}</h4>
        </div>
    );
}

