
navigator.geolocation.getCurrentPosition(posicion);
function posicion(pos){

    console.log(pos.coords.latitude);
    console.log(pos.coords.longitude);
    var map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([pos.coords.latitude, pos.coords.longitude]).addTo(map);
var circle = L.circle([pos.coords.latitude, pos.coords.longitude], {
    color: 'blue',
    fillColor: '#33CCFF',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);
}