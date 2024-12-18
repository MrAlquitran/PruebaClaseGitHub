let num = parseInt(prompt("Introduzca un valor numerico del 0 al 100"));
if (num > 100){
    document.write("El valor introducido no es valido")
} else {
    for (i = 0; i<=num; i++){
        document.write(i+"<br>");
    }
}