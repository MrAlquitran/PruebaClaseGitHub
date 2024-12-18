let Nombre = prompt("Introduzca su nombre");
let Apellidos = "Gomez Gutierrez"

if ( Nombre == "Ricardo" ) {
    document.write("Bienvenido "+ Nombre +(" ") + Apellidos);
} else {
    let Apellidos = prompt("Introduzca sus apellidos");
    document.write("Bienvenido "+ Nombre +(" ") + Apellidos);
}