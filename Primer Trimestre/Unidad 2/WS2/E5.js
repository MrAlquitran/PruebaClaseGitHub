let a = parseInt(prompt("Introduzca un primer valor correspondiente al Coeficiente A"));
let b = parseInt(prompt("Introduzca un segundo numero correspondiente al coeficiente B"));
let c = parseInt(prompt("Introduzca un tercer valor correspondiente al coeficiente C"));

let dentroraiz = (b*b - 4*a*c);

if (dentroraiz < 0){
    document.write("La ecuación no tiene solución")
} else{
    document.write("La solución de esta ecuación es: "+(-b + Math.sqrt(dentroraiz))/(2*a) +" o "+ (-b - Math.sqrt(dentroraiz))/(2*a)+ ".");
}