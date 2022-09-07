import React, { useRef }  from 'react';

const Child = ({ name, send, update }) => {

    const messageRef = useRef('')
    const nameRef = useRef('')

    const pressButton = () => {
        const text = messageRef.current.value;
        alert(`Text Input: ${text}`);

    }

    function pressButtonParams(text) {
        alert(`Text: ${text}`);
    }

    function submitName(e){
        e.preventDefault(); //Evita que se recargue la pagina. 
        update(nameRef.current.value)
    }

    return (
        <div style={{ background: 'red', padding: '10px'}}>
            <p onMouseOver={() => console.log('On Mouse Over')} >
                Hello, {name}
            </p>
            <button onClick={() => console.log('Hiciste Click en 1')}>Button One</button>
            {/* Ejecutamos una funcion sin parametros */}
            <button onClick={pressButton}>Button Two</button>
            {/* Ejecutamos una funcion con parametros, usamos funcion 'Anonima/Flecha' */}
            <button onClick={() => pressButtonParams('Hola')}>Button Three</button>
            <input 
                placeholder="Insert a text" 
                onFocus={() => console.log('Input Focused')}
                onChange={(e) => console.log('Input changed', e.target.value)}
                onCopy={() => console.log('Copied text from Input')}
                ref = {messageRef}
            />
            <button onClick={() =>send(messageRef.current.value)}>Button Menssage</button>
            <br></br>
            <div style={{marginTop: '20px'}}>
                <form onSubmit={submitName}>
                    <input ref={nameRef} placeholder='New Name'></input>
                    <button type='submit' >Update Name</button>
                </form>
            </div>
        </div>
    );
}

export default Child;
