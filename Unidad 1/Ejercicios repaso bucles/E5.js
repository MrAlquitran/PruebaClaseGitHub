//Pedir al usuario que ingrese un numero en un prompt, hacer la suma de todos los digitos, validar que el numero ingresado no contenga letras.
let num = prompt("Introduzca un numero para hacer la suma de cada uno de sus digitos");
let suma = 0;
let fin = false;
for (let i = 0; i<num.length && !fin;i++){
    if (isNaN(parseInt(num[i]))) {
        document.write("Error, debes introducir un valor numerico");
        fin = true;
    } else {
        suma = suma + parseInt(num[i]);
    }
}
if(!fin){
    document.write("La suma de los digitos es: " + suma);
}
