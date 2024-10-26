let Edad = parseInt(prompt("Introduzca un numero para determinar la edad de una persona"));
let Localidad = prompt("Introduzca el lugar de residencia de dicha persona");

if (Edad >= 18 && Edad <= 30 ) {
    if ( Localidad == "Madrid" ){
        document.write("¡Enhorabuena! Usted tiene acceso al carnet de jovenes emprendedores")
    } else {
        document.write("Lo sentimos")
    }
} 