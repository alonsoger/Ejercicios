//Funcion siempre true
function siempreTrue() {
    return true;
}
// Funcion flecha
const siempreTrueFlecha = valor => valor = true

// Funcion asincrona
const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hola soy una promesa'), 5000);
})
// miPromesa.then(resolve => console.log(resolve));

// Funcion generadora
function* indicePar() {
    let indice = 0
    while (true){
        const valor = indice + 2;
        yield valor;
        indice = valor
    }
}