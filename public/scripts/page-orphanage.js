const options = {
    dragging: false,
    touchZoom: false,
    doubleClick: false,
    scrollWheelZoom: false,
    zoomControl: false
}


// create map

const mymap = L.map('mapid', options).setView([-22.9137531,-43.5860654], 16);

// crate title layer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(mymap);

// create map

const icon = L.icon({
    iconUrl: '/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})


L
.marker([-22.9137531,-43.5860654], { icon })
.addTo(mymap)

function selectImage(event) {
    const button = event.currentTarget

    // remove todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active")
    }

    // seleciona a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanages-details > img")


    // atualiza o container image
    imageContainer.src = image.src

    // adiciona a classe .active para cada botão clicado
    button.classList.add('active')
    
}