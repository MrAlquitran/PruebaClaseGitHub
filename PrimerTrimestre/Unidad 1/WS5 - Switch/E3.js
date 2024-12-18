let num1 = parseInt(prompt("Introduzca un valor numerico"));
let num2 = parseInt(prompt("Introduzca otro valor numerico"));
let calculo = prompt("Introduzca un de los siguientes simbolos para operar: '+', '-', '*', '/'")

switch (calculo) {
    case "+":
        let  suma = num1 + num2;
        document.write("La suma de ambos numeros es: "+suma);
        break;
    case "-":
        let resta = num1 - num2;
        document.write("La resta de ambos numeros es: "+resta);
        break;
    case "*":
        let mult = num1 * num2;
        document.write("La multiplicacion de ambos numeros es: "+mult);
        break;
    case "/":
        let div = num1 / num2;
        document.write("La division de ambos numeros es: "+div);
        break;
    default:
        break;
}