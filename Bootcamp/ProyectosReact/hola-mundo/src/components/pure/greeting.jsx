//Componentes de clase (Parecido a Angular)

import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {

    constructor(props) {
        super(props); //Informacion que le paso por atributos.
        this.state = { //Valor privado que puede modificarse para modificar la vista.Informacion estatica, solo cambia con una funcion especifica. 
            age : 29
        }
    }
    render() {
        return (
            <div>
                <h1>Hola {this.props.name}!</h1>
                <h2>Tu edad es: {this.state.age}</h2>
                <div>
                    <button onClick={this.birthday}>Cumple años</button>
                </div>
            </div>
        );
    }

    // birthday = () => {
    //     this.setState((prevState) => {
    //         console.log("Deberiamos sumarle un año")
    //         age : prevState.age +1
    // })
    // }


}


Greeting.propTypes = { //Para definir los tipos de las propiedades. 
    name: PropTypes.string, 
};


export default Greeting;
