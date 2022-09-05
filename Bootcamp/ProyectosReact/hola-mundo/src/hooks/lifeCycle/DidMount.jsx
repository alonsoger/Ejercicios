/**
 * Ejemplo ciclo de vida del metodo DidMount en componente de clase y funcional. 
 */

// COMPONENTE DE CLASE

import React, { Component, useEffect } from 'react';

export class DidMount extends Component {

    componentDidMount () {
        console.log('Aca va el comportamiento antes de que el componente sea añadido al DOM (Se renderice)')
    }

    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}

// COMPONENTE FUNCIONAL

export const DidMountHook = () => {

    useEffect(() => {
        console.log('Aca va el comportamiento antes de que el componente sea añadido al DOM (Se renderice)')
    }, []); //Si dejamos los corchetes vacios solo se ejecuta una vez el useEffect

    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
}