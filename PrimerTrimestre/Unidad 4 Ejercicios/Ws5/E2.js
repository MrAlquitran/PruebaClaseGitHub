window.onload = () =>{

}
/*
let nombre = document.getElementById("nombre");
let apellidos = document.getElementById("apellidos");
let dni = document.getElementById("dni");
let telefono = document.getElementById("telefono");
let email = document.getElementById("email");
let username = document.getElementById("username");


function checkMayus(){
    /[A-Za-z]+/.test(nombre,apellidos);
    return true;
}
function checkCaractEsp(){
    /[@#$%&!^_]/.test(nombre,apellidos);
    return true;
}
function checkDNI(){
    var valido = 'TRWAGMYFPDXBNJZSQVHLCKET';
    var dni = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]$/i;
    var str = value.toString().toUpperCase();
    if(!dni.test(str)) return false;

    var letra = str.substr(-1);
    var indiceCaract = parseInt(nie.substr(0, 8)) % 23;
    if(valido.charAt(indiceCaract)== letra) return true;
}
function checkCorreo() {
    /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(email);
    return true; 
}
function checkTel(){
    /^[0-9]{9}/.test(telefono);
    return true;
}
function checkUsername(){

}


function validarFormulario(){

}

*/

function validarFormulario() {
    const nombre = document.getElementById("nombre").value.trim();
    const apellidos = document.getElementById("apellidos").value.trim();
    const dni = document.getElementById("dni").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();

    const textoRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    if (!textoRegex.test(nombre) || !textoRegex.test(apellidos)) {
        alert("El nombre y los apellidos solo deben contener letras.");
        return false;
    }

    const dniRegex = /^[0-9]{8}[A-Za-z]$/;
    if (!dniRegex.test(dni)) {
        alert("El DNI debe tener 8 números seguidos de una letra.");
        return false;
    }

    const telefonoRegex = /^[0-9]{9}$/;
    if (!telefonoRegex.test(telefono)) {
        alert("El teléfono debe tener exactamente 9 dígitos.");
        return false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert("Introduce un correo electrónico válido.");
        return false;
    }

    const usernameRegex = /^(?=.*\d)(?=.*[.,!_@#$%^&*])[A-Za-z\d.,!_@#$%^&*]{8,}$/;
    if (!usernameRegex.test(username)) {
        alert("El nombre de usuario debe tener al menos 8 caracteres, incluyendo un número y un signo de puntuación.");
        return false;
    }

    alert("Formulario enviado con éxito");
    return true;
}