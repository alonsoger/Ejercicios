import React, {useState} from 'react';

//Estilos de boton

const loggedStyle = {
    backgroundColor: 'green',
    color: 'white'
}

// ? Estilo para usuario no loggeado
const unloggedStyle = {
    backgroundColor: 'red',
    color: 'white',
    fontWeight: 'bold'
}
//Login / Logout buttons   

const LoginButton = ({loginAction, propStyle}) => {
    return (
        <button style={propStyle} onClick={loginAction}>Login</button>
    )
}

const LogoutButton = ({logoutAction, propStyle}) => {
    return (
        <button style={propStyle} onClick={logoutAction}>Logout</button>
    )
}

//? (Expresion true) && expresion => Se renderiza la expresion
//? (Expresion false) && expresion => No se renderiza la expresion



const OpcionalRender = () => {

    const [access, setAccess] = useState(false);

    const [nMessage, setNmessage] = useState(0);

    // const updateAccess = () => {
    //     setAccess(!access);
    // }

    const loginAction = () => {
        setAccess(true);
    }

    const logoutAction = () => {
        setAccess(false);
    }

    let optionalButton;

    // if(access) {
    //     optionalButton = <button onClick={updateAccess}>Logout</button>
    // }else{
    //     optionalButton = <button onClick={updateAccess}>Login</button>

    // }

    
    if(access) {
        optionalButton = <LogoutButton propStyle={unloggedStyle} logoutAction={ logoutAction }></LogoutButton>
    }else{
        optionalButton = <LoginButton propStyle={loggedStyle} loginAction={ loginAction }></LoginButton>
    }

    //Unread messages

    let addMessage = () => {
        setNmessage(nMessage + 1)
    }

    return (
        <div>
            {/* Optional button */}
            { optionalButton }

            {/* N menssages unread */}
            {/* { nMessage > 0 && nMessage == 1 && <p>You have: {nMessage} new message</p>} 
            { nMessage > 1 && <p>You have: {nMessage} new messages</p>} 
            { nMessage == 0 && <p>There are no new messages</p>} */}

            {/* Ternay Operator */}
            { access ? (
                <div>
                    { nMessage > 0 ? 
                        <p>You have: {nMessage} new message{nMessage > 1 ? 's': null}</p> 
                        : 
                        <p>There are no new messages</p> }
                    <button onClick={ addMessage }>{nMessage === 0 ? 'Add your first menssage' : 'Add new Message'}</button>
                </div>) : null 
            }
        </div>
    );
}

export default OpcionalRender;
