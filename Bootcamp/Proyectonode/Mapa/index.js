function initMap() {
    // console.log("Inicializando mapa")
    const posicion = {
        lat: -25.363, // Latitud y longitud de una posicion X
        lng: 131.044
    }

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion
    })

    const marker = new google.maps.Marker({
        position: posicion,
        map,
        title: "Posicion inicial"
    })
}