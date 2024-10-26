let num;
let suma = 0;

for (i=1; i<=10; i++){
    num = parseInt(prompt("Introduzca un numero, se sumaran todos los proximos 10 introducidos"));
    suma += num;
} 

document.write(suma);