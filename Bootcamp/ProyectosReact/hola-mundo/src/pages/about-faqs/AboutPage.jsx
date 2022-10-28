import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AboutPage = () => {

    const location = useLocation();
    const history = useNavigate();

    console.log('We are in Route:', location.pathname); //Para saber en que ruta estoy. Dependiendo de la ruta podemos pintar un componente u otro.

    const navigate = (path) => {
        history.navigate(path);
    }


    return (
        <div>
            <h1>
                About | Faqs
            </h1>
            <div>
                <button onClick={() => navigate('/home')} >Go to Home</button>
                {/* <button onClick = {  } > Go Back</button> */}

            </div>
        </div>
    );
}

export default AboutPage;
