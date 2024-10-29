window.onload = () =>{
    document.getElementById("td",introducirColor());
    
}
function generarColor(){
    let rojo = Math.trunc(Math.random() * (255));
    let verde = Math.trunc(Math.random() * (255));
    let azul = Math.trunc(Math.random() * (255));
    let color = "("+rojo+","+verde+","+azul+")"
    return "rgb" + color
}
function introducirColor(){
    let td = document.querySelectorAll("td")
    td.forEach(td => {td.style.backgroundColor = generarColor()})
}