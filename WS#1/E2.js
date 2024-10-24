//captura el movimiento del raton en todo momento

document.addEventListener("mousemove",function(event){
const y = event.clientY
const x = event.clientX

    console.log(x,y);});
