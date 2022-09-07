/**
 * Ejemplo de componente de tipo clase que cumple los metodos de ciclo de vida.
 * El orden de como se muestra todo en el HTML. 
 */

import React, { Component } from "react";
import PropTypes from "prop-types";

class LifeCycleExample extends Component {
    constructor(props) {
        super(props);
    console.log("CONSTRUCTOR: Cuando se instancia el componente");
    //Solo se instancia, no se hacen peticiones ni nada mas. Siempre pasa por aca primero. Inicializacion del estado del componente/los 
    }

    componentWillMount() {
        console.log("WillMount: Antes del montaje del componente");
    //
    }

    componentDidMount() {
        console.log(
            "DidMount: Justo al del montaje del componente, antes de renderizarlo"
        );
        //Aca se puede hacer algun tipo de control, peticiones, listas.. Se hace despues del montaje y antes de renderizarlo.
    }

    componentWillReceiveProps(nextProps) {
        console.log("WillReceiveProps: Si va a recibir nuevas props");
        //Si hay nuevas props por parte de algun padre.
    }

    shouldComponentUpdate(nextProps, nextState) {
    /**
     * Controla si el componente debe o no actualizarse
     */
    // return true / false
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("WillUpdate: Justo antes de actualizarse");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("DidUpdate: Justo después de actualizarse");
    }

    componentWillUnmount() {
        console.log("WillUnmount: Justo antes de desaparecer");
    }

    render() {
        return <div></div>;
    }
}

LifeCycleExample.propTypes = {};

export default LifeCycleExample;
