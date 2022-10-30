import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const HomePage = () => {

    const location = useLocation();
    const navigate = useNavigate();

    console.log('We are in Route:', location.pathname); //Para saber en que ruta estoy. Dependiendo de la ruta podemos pintar un componente u otro.


    return (
        <div>
            <h1>Home Page</h1>
            <div>
                        {/* *** VAMOS AL INICIO *** */}
                <button onClick={() => navigate('/profile')} >Go to Profile</button>
                        {/* *** VAMOS UNOS PARA ATRAS ***  */}
                <button onClick = {() => navigate(-1)} > Go Back</button>
                        {/* *** RECARGAMOS LA PAGINA 'Forward' */}
                {/* <button onClick = {() => navigate(1)} > Go Forward</button> */}
            </div>
        </div>
    );
}

export default HomePage;
