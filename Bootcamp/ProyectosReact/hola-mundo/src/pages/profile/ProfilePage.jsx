import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const ProfilePage = ({user}) => {

    const location = useLocation();
    const navigate = useNavigate();

    console.log('We are in Route:', location.pathname); //Para saber en que ruta estoy. Dependiendo de la ruta podemos pintar un componente u otro.

    return (
        <div>
            <h1>YOUR PROFILE</h1>
            <button onClick = {() => navigate('/tasks')} > Go Tasks</button>
            <button onClick = {() => navigate(-1)} > Go Back</button>
        </div>
    );
}

export default ProfilePage;
