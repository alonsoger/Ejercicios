/**
 * Ejemplo de uso de metodo componentDidUpdate en componente clase y funcional.
 */

// COMPONENTE DE CLASE

import React, { Component, useEffect } from 'react';

export class DidUpdate extends Component {

    componentDidUpdate(){
        console.log('Aca va cuando el componente recibe nuevos props o cambios en el estado privado')
    }

    render() {
        return (
            <div>
                <h1>DidUpdate</h1>
            </div>
        );
    }
}

// COMPONENTE FUNCIONAL

export const DidUpdateHook = () => {

    useEffect(() => {
        console.log('Aca va cuando el componente recibe nuevos props o cambios en el estado privado')
    }); //Le sacamos los corchetes, ya que queremos que se ejecute todas las veces que haya algun cambio. 

    return (
        <div>
            <h1>DidUpdate</h1>
        </div>
    );
}
