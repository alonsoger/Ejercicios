const nombre = "German";
const apellido = "Alonso";
const persona = {
    nombre: {nombre},
    apellido: {apellido}
}

localStorage.setItem("persona", JSON.stringify(persona));
sessionStorage.setItem("persona", JSON.stringify(persona));

document.cookie = "objCookie=persona; max-age=" + 120









//LocalStorage
// localStorage.setItem("nombre", nombre)
// localStorage.setItem("nombre", "Juan")
// console.log(localStorage.getItem("nombre"))
// localStorage.setItem("persona2", JSON.stringify({nombre: "Carlos", edad: 28 })) //Guardar objeto con LocalStorage
// console.log(JSON.parse(localStorage.getItem("persona2")))
// localStorage.removeItem("persona2")
// localStorage.removeItem("nombre")

// //SesionStorage
// sessionStorage.setItem("nombre", nombre) //Igual que el anterior, solo que no se puede acceder desde otra pestania del navegador. 
// sessionStorage.removeItem("nombre", nombre) 


// //Cookies
// document.cookie = "nombreCookie=German"
// document.cookie = "caducidad=Nombre; expires=" + new Date(2023,0,1).toUTCString()
// console.log(document.cookie)