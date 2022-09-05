/**
 * Ejemplo de uso del metodo componentWillUnmount en componente de clase y funcional. El componente desaparece. 
 */

import React, { Component, useEffect } from 'react';

export class WillUnMount extends Component {

    componentWillUnmount() {
        console.log('Comportamiento antes de que el componente desaparezca');
    }

    render() {
        return (
            <div>
                <h1>WillUnMount</h1>
            </div>
        );
    }
}


export const WillUnMountHook = () => {

    useEffect(() => {
        //No va nada en effect, iria todo en el return. 
        return () => {
            console.log('Comportamiento antes de que el componente desaparezca');
        };
    }, []); // Y dejamos los corchetes vacios ya que queremos que se ejecute una vez. 

    return (
        <div>
            <h1>WillUnMount</h1>
        </div>
    );
}
