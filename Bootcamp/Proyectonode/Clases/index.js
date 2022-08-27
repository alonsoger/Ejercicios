class Estudiante {
    constructor (nombre, asignaturas){
        this.nombre = nombre;
        this.asignaturas = ["HTML", "CSS", "JavaScript"];
    }

    obtenDatos() {
        console.log(`${this.nombre}, ${this.asignaturas}`)
    }
}

const estudiante = new Estudiante("German");
estudiante.obtenDatos();