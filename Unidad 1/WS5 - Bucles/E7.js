let num1 = parseInt(prompt("Jugador 1, introduzca el numero a adivinar"));
let num2;
do{
num2 = parseInt(prompt("Jugador 2, introduzca un numero para adivinar"));
if (num1 > num2){
    document.write("El numero a adivinar es mayor");
} else {
    document.write("El numero a adivinar es menor");
}
} while ( num2 !== num1)

document.write("¡Enhorabuena!")