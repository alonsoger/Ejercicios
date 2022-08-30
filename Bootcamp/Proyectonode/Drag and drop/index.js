const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".seccion");
const tacho = document.querySelector("#basura");

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        //console.log("Estoy arrastrando:" + parrafo.innerText);
        parrafo.classList.add("dragging");
        event.dataTransfer.setData("id", parrafo.id)
        const elem_fantasma = document.querySelector(".imagen-fantasma")
        event.dataTransfer.setDragImage(elem_fantasma, 0, 0)
    })

    parrafo.addEventListener("dragend", () => {
        //console.log("Termine de arrastrar");
        parrafo.classList.remove("dragging");
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
        //console.log("Drag Over")
    })

    seccion.addEventListener("drop", event => {
        //console.log("Drop")
        const id_parrafo = event.dataTransfer.getData("id")
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })
    
})

tacho.addEventListener("dragover", event => {
    event.preventDefault()
    event.dataTransfer.dropEffect = "move";   
})
tacho.addEventListener("drop", event => {
    const id_parrafo = event.dataTransfer.getData("id")
    document.getElementById(id_parrafo).remove();
})


