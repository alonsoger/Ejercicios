const persona = {
    nombre: "German",
    apellido: "Alonso",
    edad: 26,
    altura: 1.74,
    eresDesarrollador: true
}

let edadPersona = persona.edad;

const personaDos = {
    nombre: "Juan",
    apellido: "Gasper",
    edad: 38,
    altura: 1.84,
    eresDesarrollador: false
}
const personaTres = {
    nombre: "Martin",
    apellido: "Ferrari",
    edad: 40,
    altura: 1.78,
    eresDesarrollador: true
}

const objetos = [persona, personaDos, personaTres];
const objOrdenado = objetos.sort((a,b) => b.edad - a.edad)