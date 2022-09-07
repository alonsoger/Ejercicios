//Componentes funcionales

import React, { useState } from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    //useState()
    // const [variable, metodo de actualizacion] = useState(valor inicial)
    const [age, setage] = useState(29);

    const birthday = () => {
        //Actualiza el State
        setage(age + 1);
    }
    return (
        <div>
            <h1>Hola {props.name}!</h1>
            <h2>Tu edad es: {age}</h2>
            <div>
                <button onClick={birthday}>Cumple años</button>
            </div>
        </div>

    );
};

GreetingF.propTypes = {
    name: PropTypes.string,
};


export default GreetingF;
