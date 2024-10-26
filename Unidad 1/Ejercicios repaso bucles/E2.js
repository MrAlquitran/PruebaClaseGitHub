//Mostrar todos los números de 1 a N aumentando de 2 en 2 donde n lo ingresa el usuario en un prompt.
let n = parseInt(prompt("Ingrese un número"));
let i = 1;
while (i <= n) {
    document.write(i+"<br>");
    i += 2;
}