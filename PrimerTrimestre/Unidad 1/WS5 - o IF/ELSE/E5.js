let Examen1 = parseInt(prompt("Introduzca una nota de examen"));
let Examen2 = parseInt(prompt("Introduzca una segunda nota de examen"));
let mediaExamen = ((Examen1+Examen2)*0.75)/2;

let Proyecto1 = parseInt(prompt("Introduzca una nota de proyecto"));
let Proyecto2 = parseInt(prompt("Introduzca una segunda nota de proyecto"));
let mediaProyecto = ((Proyecto1+Proyecto2)*0.25)/2;

let mediaTotal = (mediaExamen+mediaProyecto);

if (mediaTotal >= 5) {
    document.write("Ha aprobado la materia, su nota es "+ mediaTotal);
} else {
    document.write("No ha superado la materia, su nota es "+ mediaTotal);
}