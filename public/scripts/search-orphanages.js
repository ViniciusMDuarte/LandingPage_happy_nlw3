// create map
const mymap = L.map('mapid').setView([-22.9137531,-43.5860654], 16);

// crate title layer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(mymap);

// create map

const icon = L.icon({
    iconUrl: './public/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das Meninas <a href="page-orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>')
//crate icon


L
.marker([-22.9137531,-43.5860654], { icon })
.addTo(mymap)
.bindPopup(popup);