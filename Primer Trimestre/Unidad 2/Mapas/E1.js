//i
navigator.geolocation.getCurrentPosition(peticion);
function peticion(pos){}
//ii
navigator.geolocation.getCurrentPosition(muestraposicion);
function muestraposicion(pos){
    console.log(pos.coords.latitude);
    console.log(pos.coords.longitude);
}
//iii
function geoloc(){
if("geolocation" in navigator){
    console.log("La posicion esta disponible");
    return true;
} else {
    console.log("La geolocalizacion no esta disponible.");
    return false;
}
}
console.log(navigator.geolocation.getCurrentPosition(geoloc));
//iv
navigator.geolocation.watchPosition(muestraposicion);

//v
