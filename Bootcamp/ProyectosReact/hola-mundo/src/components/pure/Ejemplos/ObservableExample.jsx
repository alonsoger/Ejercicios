//Los observables emiten valores como una promesa cuando se resuelve, solo que varias vaces. 
import React, { useState }from 'react';
import { getNumbers } from './../../../services/ObservableService'
const ObservableExample = () => {

    const [number, setNumber] = useState(0);

    const obtainNumbers = () => {
//Lo que hacemos con este es obteniendo varios valores e ir actualizando la vista.
//Los observables pueden no terminarse.
//Es importarse desuscribirse del observable para que no se quede escuchando. 
        console.log('Subscription to Observable');
        getNumbers.subscribe(
            {
                next(newNumber){
                    console.log('New Number:', newNumber);
                    setNumber(newNumber);
                },
                error(error){
                    alert(`Something went wrong:${error}`)
                },
                complete(){
                    alert(`Finish: ${number}`)
                    console.log('Done with the observable');
                }
            }
        )
    }


    return (
        <div>
            <h2>Numbers: {number} </h2>
            <button onClick={obtainNumbers}>Numbers</button>
        </div>
    );
}

export default ObservableExample;
