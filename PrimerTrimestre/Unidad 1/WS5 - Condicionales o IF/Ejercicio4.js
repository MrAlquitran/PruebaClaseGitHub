let Valor = parseInt(prompt("Introduzca un número, si es superior a 100 se le aplicara un 15% de descuento"));
let descuento = Valor * 0.15;
if (Valor > 100) {
    Valordesc = Valor - descuento;
    document.write("El nuevo valor de su numero introducido será "+Valordesc);
} else{
    document.write("El valor de su numero introducido es "+Valor);
}
