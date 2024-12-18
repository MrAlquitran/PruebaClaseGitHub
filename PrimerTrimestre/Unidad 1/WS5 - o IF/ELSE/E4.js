let nhermanos = parseInt(prompt("Introduzca un numero de hermanos que tienes"));
let porcentaje;
if ( nhermanos => 3 ) {
    porcentaje = nhermanos * 0.15;
    document.write(nhermanos - (porcentaje));
} else if ( nhermanos < 3 || nhermanos > 0) {
    porcentaje = nhermanos * 0.05;
    document.write(nhermanos - (porcentaje));
} 
