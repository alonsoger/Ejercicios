/*Ejemplo de uso de: 
    - useState() ; - useRef() ; - useEffect() */

import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {

    //Creamos dos contadores distintos, en estados diferentes.

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    //Creamos una referencia con useRef, para asociar una variable con un elemento del DOM.
    //En vez de usar JQuery, podemos usar useRef.

    const miRef = useRef();

    function incrementar1() {
        setContador1(contador1 + 1);
    }
    function incrementar2() {
        setContador2(contador2 + 1);
    }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Usamos el useEffect

    /*Estructura del useEffect: */
    /** 
     * ? Caso1: Ejecutar siempre un snippet de codigo.
     * Cuando hay un cambio en el estado del componente se ejecuta lo que este dentro del useEffect.
    */

    // useEffect(() => {
    //     console.log('Cambio en el estado del componente');
    //     console.log('Muestra referencia a elemento del DOM');
    //     console.log(miRef);
    // });
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /** 
     * ? Caso2: Ejecutar solo cuando cambie el contador 1.
     * Cuando hay un cambio en el contador1 se ejecuta lo que este dentro del useEffect. Con el contador2 no habra cambios. 
    */

    //  useEffect(() => {
    //     console.log('Cambio en el estado del contador1');
    //     console.log('Muestra referencia a elemento del DOM');
    //     console.log(miRef);
    //  }, [contador1]); //En el input van los componentes que referencian los cambios o los que queremos que tome como referencia. 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/** 
     * ? Caso3: Ejecutar solo cuando cambie el contador1 o contador2.
     * Cuando hay un cambio en el contador1 o en el contador2 se ejecuta lo que este dentro del useEffect. Es por si hay mas contadores y solo queremos esos dos. 
    */

     useEffect(() => {
        console.log('Cambio en el estado del contador1 o contador2');
        console.log('Muestra referencia a elemento del DOM');
        console.log(miRef);
     }, [contador1, contador2]); //Restringimos el useEffect, solo en los casos que queremos. Este caso 1 y 2. Sirve para controlar varios elementos. 

    return (
        <div>
            <h1> Ejemplo de useState(), useRef() y useEffect() </h1>
            <h2>CONTADOR1: { contador1 } </h2>
            <h2>CONTADOR2: { contador2 } </h2>
            {/* Elemento referenciado */}
            <h4 ref={miRef}> Ejemplo de elemento referenciado </h4>
            <div>
                <button onClick={incrementar1}>Incrementar el Contador1</button>
                <button onClick={incrementar2}>Incrementar el Contador2</button>
            </div>
        </div>
    )
}

export default Ejemplo2;


