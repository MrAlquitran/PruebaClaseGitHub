let numero = parseInt(prompt("Introduzca un numero para determinar si es par, si es multiplo de 3 o si es multiplo de 5"));

switch (numero) {
    case (numero%2 == 0):
            document.write("El numero es par");
        break;
    case (numero%3 == 0):
        document.write("El numero es multiplo de 3");
        break;
    case (numero%5 == 0):
        document.write("El numero es multiplo de 5");
        break;
    default:
        break;
}