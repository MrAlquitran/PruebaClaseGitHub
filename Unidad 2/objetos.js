/*
let miCoche = {
    marca: "Ford",
    modelo: "Focus"
};

let fecha = new Date();
let fecha2 = new Date();


function mifuncion(){
console.log("Llamada a mi función");
}

miFuncion()
*/
function muestraposicion(pos){
    console.log(pos.coords.latitude);
    console.log(pos.coords.longitude);
    
}
navigator.geolocation.getCurrentPosition(muestraposicion);
