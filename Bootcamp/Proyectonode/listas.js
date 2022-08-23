const compra = ["cereales", "agua", "carne", "verdura", "leche", "cafe"];
compra.push("Aceite de girasol")
compra.pop()

const peliculas = [
    {
    titulo: "El planeta del tesoro",
    director: "John Musker",
    fecha: 2000
        },
    {
    titulo: "Interestelar",
    director: "Christopher Nolar",
    fecha: 2014
    },

    {
    titulo: "The wolf of wall street",
    director: "Martin Scorsesse",
    fecha: 2013
    },
]

const pelis2010 = peliculas.filter(obj => obj.fecha > 2010);
const directores = peliculas.map(valor => valor.director);
const titulos = peliculas.map(valor => valor.titulo);

const concatenados = directores.concat(titulos)
const concatenadosDos = [...directores, ...titulos]
