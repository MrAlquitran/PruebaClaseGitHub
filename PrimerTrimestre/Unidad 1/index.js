/*var mivariable = 0;
document.write(mivariable);

let valor = parseInt(prompt("dame un numero"));
valor = valor + 1;
console.log(valor);
*/
let nombre = prompt("Dime tu nombre");

document.write("<br>"+nombre[0])

for (let i=0; i< nombre.length; i++){
document.write("<p>" +nombre[i]+("</p>"))
}

while (nombre == "Jose"){
    document.write("Ola");
}

let a = prompt("Nombre");
let encontrado = false;
for (let i = 0; i < a.length; i++) {
    if (a == "J"){
        encontrado = true;
    } else {
        document.write("No es J")
    }
    
}

for (let i=0; i<arr.length; i++){
    document.write(arr[i]);
}
// misma funcion en ambos, el "of" permite facilitar el codigo
for (let i of arr){
    document.write(i+ "<br>")
}