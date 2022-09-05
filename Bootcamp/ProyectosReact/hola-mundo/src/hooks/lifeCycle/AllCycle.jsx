import React, { useEffect } from 'react';

const AllCycle = () => {
//Solo deberia haber un useEffect en un componente. 

    useEffect(() => {
        //En esta seccion se puede poner cualquier tipo de logica, if, for..
        console.log('Componente creado')

        const intervalID = setInterval(() => {
            document.title = `${new Date()}`
            console.log('Actualizacion del componente')
        }, 1000)

        return () => {
            console.log('Componente que desaparece.')
            document.title = 'Tiempo detenido'
            clearInterval(intervalID);
        };
    }, [input]);

    return (
        <div>
            
        </div>
    );
}

export default AllCycle;
