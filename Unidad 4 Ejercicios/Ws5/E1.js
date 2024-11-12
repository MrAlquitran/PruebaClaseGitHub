window.onload = () =>{
    document.getElementById("textbox",checkMayus());
    document.getElementById("textbox",checkCaractEsp());
    document.getElementById("correo",checkCorreo());
    document.getElementById("tarjeta",checkTarjeta());
}
let caja1 = document.getElementById("textbox");
let caja2 = document.getElementById("correo");
let caja3 = document.getElementById("tarjeta");


function checkMayus(){
    /[A-Za-z]+/.test(caja1);
    return true
}
function checkCaractEsp(){
    /[@#$%&!^_]/.test(caja1);
    return true;
}
function checkCorreo() {
    /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(caja2);
    return true; 
}
function checkTarjeta(){
    /^[0-9]{16}/.test(caja3);
    return true;
}


caja1.addEventListener("submit",checkMayus());
caja1.addEventListener("submit",checkCaractEsp());