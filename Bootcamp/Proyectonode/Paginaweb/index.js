const boton = document.querySelector("#btn-1");
boton.addEventListener("click", () => {
    alert("Click en el boton");
})

// const boton2 = document.querySelector("#btn-2");
// boton2.addEventListener("click", () => {
//     console.log("Hola, estoy usando JQuery")
// })

$(() => {
    $("#btn-2").click(() => {
        console.log("Hola, estoy usando JQuery");
    })
})