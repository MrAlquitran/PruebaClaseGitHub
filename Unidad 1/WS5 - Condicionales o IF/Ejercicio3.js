let Edad = parseInt(prompt("Introduzca un numero para determinar la edad de una persona"));
let Localidad = prompt("Introduzca el lugar de residencia de dicha persona");

if ( Edad == 25 ){
    if (Localidad == "Madrid"){
    document.write("¡Enhorabuena!");
    } 
} else {
    document.write("Al menos no eres de Madrid");
}
