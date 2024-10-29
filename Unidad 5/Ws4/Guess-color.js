window.onload = () =>{
    document.getElementById("td",introducirColor());

}
let td = document.querySelectorAll("td")
function generarColor(){
    let rojo = Math.trunc(Math.random() * (255));
    let verde = Math.trunc(Math.random() * (255));
    let azul = Math.trunc(Math.random() * (255));
    let color = "("+rojo+","+verde+","+azul+")"
    return "rgb" + color
}
function introducirColor(){
    td.forEach(td => {td.style.backgroundColor = generarColor()})
}
function casillaAleatoria(){
    let aleatorio = Math.trunc(Math.random() * 6);
    return aleatorio
}
function colorGanador(){
    let casilla = td[]
}