
// create map
const mymap = L.map('mapid').setView([-22.9137531,-43.5860654], 16);

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


let marker;


mymap.on('click', (event) => {

    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;


    //remove icon
    marker && mymap.removeLayer(marker)

    // add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(mymap);
    console.log(lat, lng)

})


// adicionar o campo de fotos
function addPhotoField() {
   // pegar o container de fotos
    const container = document.querySelector('#images');

   // pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload');

   // realizar o clone da ultima img adicionada
   const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

   const input = newFieldContainer.children[0];

   if (input.value == "") {
        return
    } 
    
    // limpar input
    input.value = "";

   // adicionar o clone ao container de images

   container.appendChild(newFieldContainer);

}

function deleteFields(event) {

    const span = event.currentTarget;

    const fieldsContainer = document.querySelectorAll('.new-upload');


    if(fieldsContainer.length < 2) {

        span.parentNode.children[0].value = ""

        return
    }

    span.parentNode.remove();

}



function toggleSelect(event) {
   
   document.querySelectorAll('.button-select button')

   .forEach( function (button) {
        button.classList.remove('active')
    })

    const button = event.currentTarget;
    button.classList.add('active');

    const input = document.querySelector('[name="input-open_on_weekends"]');
    input.value = button.dataset.value
}