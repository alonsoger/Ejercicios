//Definimos estilos a traves de funciones. A traves de constantes. 

import React, { useState } from 'react';

// ? Estilo para usuario loggeado
const loggedStyle = {
    color: 'white'
}

// ? Estilo para usuario no loggeado
const unloggedStyle = {
    color: 'red',
    fontWeight: 'bold'
}

const GreetingStyled = (props) => {
//Estado para el componente y poder controlar si esta conectado o no. 
    const [logged, setLogged] = useState(false);

    return (
        <div style={ logged ? loggedStyle : unloggedStyle }>
            { logged ? 
                (<p>Hola, {props.name} </p>) 
                // Estas variables las podemos guardar en una funcion y pasarle la funcion en vez de los parametros. 
                //Ej: ' const greetingUser = () => (<p>Hola, {props.name} </p>); ' Y asi.. 

                : 
                (<p>{props.name} conectate</p>)}

            <button onClick={() => {
                console.log('Hiciste click');
                setLogged(!logged);
            }}>
                { logged ? 'Logout' : 'Login'}
            </button>
        </div>
    );
}

export default GreetingStyled;
