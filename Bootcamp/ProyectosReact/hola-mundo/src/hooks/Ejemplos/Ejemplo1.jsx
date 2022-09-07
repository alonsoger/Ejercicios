/* Ejemplo de uso del Hook useState... 
    Creamos un componente de tipo funcion y accedemos a su estado a traves de un hook y lo podemos modificar.
*/

import React, { useState } from 'react';

const Ejemplo1 = () => {

    //Valor inicial para contador
    const valorInicial = 0;

    //Valor inicial para persona    
    const personaInicial = {
        nombre: 'German',
        email: 'email'
    }

    /* Los valores iniciales van a ser parte del estado del componente, asi poder gestionar sus cambios y que aparezcan en la vista del mismo. 
    Estructura: 
        const [nombreVariable, funcionParaCambios] = useState(valorInicial)
    */

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /* Actualiza el estado privado del contador.*/

    function incrementaContador() {
        // ? funcionParaCambios(nuevoValor)
        setContador(contador + 1);
    }
    /* Actualiza el estado privado de persona*/
    function actualizarPersona() {
        setPersona({
            nombre: 'Juan',
            email: 'juan@gmail.com',
        })
    }



    return (
        <div>
            <h1> Ejemplo de useState() </h1>
            <h2>CONTADOR: { contador } </h2>
            <h2>PERSONA: { persona.nombre } { persona.email } </h2>
            <div>
                <button onClick={incrementaContador}>Incrementar el Contador</button>
                <button onClick={actualizarPersona}>Actualiza la persona</button>
            </div>
        </div>
    );
}

export default Ejemplo1;

