// capturar el evento onClick para que ejecute un alert cada vez que ocurra

var btn = document.getElementsByTagName("button");

function Alerta(){
    alert("CLICK")
}
btn[0].addEventListener("click",Alerta);