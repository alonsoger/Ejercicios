import React from 'react';

const Rectangulo = () => {

    let red = 0;
    let green = 0;
    let blue = 0;

    let colorInicial = `rgb(${red},${green},${blue})`

    const interiorRectangulo = () => {
        return (
            <div width="255px" height="255px" style={{background: 'colorInicial'}}></div>
        )
    }


    return (
        <div>
        
        </div>
    );
}

export default Rectangulo;
