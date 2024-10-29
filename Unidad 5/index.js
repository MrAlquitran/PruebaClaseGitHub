//Comando en consola
//document.getElementById("t1h1").innerHTML="CAMBIO"

window.onload = () =>{
    //1º forma (identificarlos por id)
    let btn = document.getElementById("btnCambiar"); 
    btn.addEventListener("click",cambiarh1);
    //2º forma (identificarlos por su posicion en el array)
    //getElementsByTagName crea un array con todos los objetos que tengan el tag indicado y su posición dependera del orden en el que estan en el html
    let btnotro = document.getElementsByTagName("button")[0];
    btnotro.addEventListener("click",cambiarh1);

    let m1H1 = document.getElementById("t1h1");
    m1H1.addEventListener("click", (e)=>{
        e.target.style.backgroundColor = "red"
    }) 
}
function cambiarh1(){
    let cajaTexto = document.getElementById("textBox");
    let t1H1 = document.getElementById("t1h1"); 
    t1h1.innerText = cajaTexto.value;
    cajaTexto.value = "";
    t1H1.style.backgroundColor = "grey";
}