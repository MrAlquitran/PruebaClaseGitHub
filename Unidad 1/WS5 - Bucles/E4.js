let palabra 
do {
    palabra = prompt("Escriba palabras, escriba 'SALIR' para finalizar");
    palabra = palabra.toUpperCase();
    document.write(palabra+"<br>");
    } while (palabra !== "SALIR") 