import React from 'react';

const AsyncExample = () => {
// ********************************************
// Ejemplo de funcion asincrona, la primera seria como la promesa que despues va a ser consumida por la segunda funcion. 
    async function generateNumber(){
        return 1; 
    }
// Esta funcion llama a la funcion asincrona. Espera que se complete la primera y despues da el resultado.
// No ejecuta la funcion antes de tiempo. Nos aseguramos de eso. 
    function obtainNumber() {
        generateNumber()
        .then((response) => alert(`Response: ${response}`))
        .catch((error) => alert(`Something went wrong: ${error}`))
    }
// ********************************************
    async function generatePromiseNumber() {
        return Promise.resolve(2); //Hasta que una promesa no se resuelve no tenemos el dato final. 
    }
    function obtainPromiseNumber() {
        generatePromiseNumber()
            .then((response) => alert(`Response: ${response}`))
            .catch((error) => alert(`Something went wrong: ${error}`))
    }
    // Usamos el '.then' para esperar la resolucion de la promesa. 
    // Usamos el '.catch' para mandar un error. Se pueden procesar en la promesa con el 'Reject'.
    // Los objetos que devuelven promesas se deben consumir con un '.then' o un '.catch'. 

    async function saveSessionStorage (key, value) {
        sessionStorage.setItem(key, value);

        return Promise.resolve(sessionStorage.getItem(key));
    }
    // El 'await' lo agregamos para que se detenga la ejecucion. Se usa con las funciones 'Async'

    function showStorage(){
        saveSessionStorage('name', 'German')
            .then((response) => { //La 'response' es el 'resolve' de la promesa. El resultado. 
                let value = response;
                alert(`Saved Name: ${value}`); //Este seria el 'CallBack', lo que devuelve despues de resolverse. 
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`)
            })
            .finally(() => console.log('SUCCESS: Name saved and retreived'))
    }

    async function obtainMessage() { //Aca la idea es hacer una peticion HTTP y que me devuelva el token para login o lo que sea. 

        let promise = new Promise((resolve, reject) => {

            setTimeout(() => resolve('Hello World'), 2000)
        });
        
        let message = await promise; 

        await alert(`Message received: ${message}`)
    }

    const returnError = async() => {
        await Promise.reject(new Error('Oooops!'))
    }

    const consumeError = () => {
        returnError()
            .then((response) => alert(`Everithing is OK: ${response}`))
            .catch((error) => alert(`Something went wrong: ${error}`))
            .finally(() => alert('Finally executed')) //El finally se ejecuta, sea por el '.then' o por el '.catch'. 
    }

    const urlNotFound = async () => {
//Ejemplo de como seria una peticion HTTP con un TRYCATCH. 
        try {
            let response = await fetch('https://')
            alert(`Response: ${JSON.stringify(response)}`)
        } catch (error) {
            alert(`Something went wrong with your URL: ${error}`)
        }
    }

    const multiplePromise = async () => {
        let results = await Promise.all(
            [
                //El '.all' hace que esperemos a que se resuelvan todas las promesas dentro del Array. 
                fetch('https://'),
                fetch('https://'),

            ]
        ).catch((error) => alert(`Something went wrong with your URLs: ${error}`))
    }

    return (
        <div>
            <h1>Async, Promise Examples</h1>
            {/* Llama la funcion */}
            <button onClick={obtainNumber}>Obtain Number</button>
            <button onClick={obtainPromiseNumber}>Obtain Promise</button>
            <button onClick={showStorage}>Save Name and Show</button>
            <button onClick={obtainMessage}>Receive message from de past</button>
            <button onClick={consumeError}>Obtain Error</button>
            <button onClick={urlNotFound}>Request to Unknown URL</button>
            <button onClick={multiplePromise}>Multiple PromisesL</button>


        </div>
    );
}
// TODO! Diferencia entre un callBack y un promesa: 
    //El callback es una funcion que se pasa como argumento a otra funcion para que se ejecute en determinado caso. Ejemplo despues de un timeOut.
    //Dado un evento se ejecuta ese callback. Esta controlado y solo se ejecuta en caso de que pase lo que tiene que pasar. 
    //Las promesas ejecutan algo ahora que se va a cumplir en el futuro.
export default AsyncExample;
