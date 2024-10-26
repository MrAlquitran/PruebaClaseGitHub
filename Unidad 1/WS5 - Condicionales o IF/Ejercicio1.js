let valor = parseInt(prompt("Introduzca un numero para determinar si es par o impar"))
let definicion = valor % 2

if ( definicion == 0 ){
    document.write("El numero es par");
} else{
    document.write("El numero es impar");
}