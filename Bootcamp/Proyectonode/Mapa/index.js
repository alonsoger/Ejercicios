let marker, map;


function initMap() {
    // console.log("Inicializando mapa")
    const posicion1 = {
        lat: -41.14557, // Latitud y longitud de una posicion X
        lng: -71.30822
    }
    const posicion2 = {
        lat: 41.87194, // Latitud y longitud de una posicion X
        lng: 12.56738
    }
    const posicion3 = {
        lat: 39.074208, // Latitud y longitud de una posicion X
        lng: 21.824312
    }

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion1
    })

    const marker1 = new google.maps.Marker({
        position: posicion1,
        map,
        title: "San carlos de Bariloche"
    })
    const marker2 = new google.maps.Marker({
        position: posicion2,
        map,
        title: "Italia"
    })
    const marker3 = new google.maps.Marker({
        position: posicion3,
        map,
        title: "Grecia"
    })

    // marker.setPosition({lat, lng})

}
//Una forma
// function geoPosicion() {
//     if(navigator.geolocation){
//         const geoLoc = navigator.geolocation
//         const watchPos = geoLoc.watchPosition(posision => {
//             console.log(position.coords)
//         }, error => console.error(error), { timeout: 60000 })
//     } else {
//         alert("No admite geolocalizacion.")
//     }
// }

//Otra forma con funciones separadas
function geoPosicion() {
    if(navigator.geolocation){
        const geoLoc = navigator.geolocation
        const options = { timeout: 60000 }
        const watchPos = geoLoc.watchPosition(centraMapa, onError, options)
    } else {
        alert("No admite geolocalizacion.")
    }
}

function centraMapa(position) {
    const nuevaPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    console.log(nuevaPos)
    marker.setPosition(nuevaPos)
    map.setCenter(nuevaPos)
}

function onError(error){
    console.error(error);
}