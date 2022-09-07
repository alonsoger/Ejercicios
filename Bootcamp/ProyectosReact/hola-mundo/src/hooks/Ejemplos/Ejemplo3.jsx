/*Ejemplo Hook
    - useState()
    - useContext()
*/

import React, { useState, useContext } from 'react';
/**
 * 
 * @returns Componente1
 * Dispone de un contexto que va a tener un valor que recibe del padre.
 */

//Iniciamos un estado vacio que se llenara con los datos del contexto del padre. 
const miContexto = React.createContext(null)

const Componente1 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h1>El token es: {state.token}</h1>
            {/* Usamos el componente2 */}
            <Componente2></Componente2>
        </div>
    );
}

const Componente2 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h2>La session es: {state.session} </h2>
        </div>
    );
}

export default function ComponenteConContexto() {

    const estadoInicial = {
        token: '123456',
        session: 1 
    }

    //Creamos el estado de este componente. 
    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSession() {
        setSessionData({
            token: 'UKASQD546',
            session: sessionData.session + 1
        });
    }

    return (
        <miContexto.Provider value={ sessionData }>
            {/* Todo lo de adentro puedo leer los datos de sessionData y si se actualizan los componentes de esta seccion tambien se actualizan */}
            <h1>Ejemplo de useState y useContext</h1>
            <Componente1></Componente1>
            <button onClick={actualizarSession}>Actualizar Session</button>
        </miContexto.Provider>
    )
}

