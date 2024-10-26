let Edad = parseInt(prompt("Introduzca un numero para determinar la edad de una persona"));

if ( Edad <= 5 ) {
    document.write("Usted pertenece al Jardín de Infancia.");
} else if ( Edad => 6 && Edad <= 11 ) {
    document.write("Usted pertenece a la Primaria.");
} else if ( Edad => 12 && Edad <= 16 ) {
    document.write("Usted pertenece a la ESO.");
} else if ( Edad => 17 && Edad <= 21 ) {
    document.write("Usted pertenece a Bachillerato.");
} else if ( Edad > 21 ) {
    document.write("Usted pertenece a la Universidad");
}