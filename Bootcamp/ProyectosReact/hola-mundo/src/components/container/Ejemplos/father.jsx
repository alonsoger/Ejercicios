import React, {useState} from 'react';
import Child from '../../pure/Ejemplos/child';

const Father = () => {

    const [name, setName] = useState('German');

    function showMessage(message) {
        alert(`Message received: ${message}`);
    }

    function updateName(newName){
        setName(newName);
    }

    return (
        <div style={{ background: 'Blue', padding: '10px' }}>
            <Child name={name} send={showMessage} update={updateName}></Child>
        </div>
    );
}

export default Father;
