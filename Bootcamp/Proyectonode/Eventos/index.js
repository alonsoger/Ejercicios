const hTexto = document.getElementById("saludo");

hTexto.addEventListener("cambioTexto", evento => {
    console.log(evento.detail);
    hTexto.innerText = evento.detail.texto;
    hTexto.style.color = evento.detail.color;
})

function cambiarText(nuevoTexto, color){
    const evento = new CustomEvent("cambioTexto", {
        detail: {
            texto: nuevoTexto,
            color
        }
    })
    hTexto.dispatchEvent(evento);
}

const boton = document.querySelector("#btn-alert");
boton.addEventListener("click", () => {
    //console.log("click")
    //alert("Hiciste click")
    //confirm("Seguro?") ? console.log("Hace esto si acepta") : console.log("Hace esto si no")
    
})