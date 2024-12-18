var btn = document.getElementsByTagName("button");
var cajaTexto = document.getElementById("textbox");
var output = document.querySelector("#output");
function saltaAlert(e){
    console.log(e)
    alert("CLICK")
}

btn[0].addEventListener("click",saltaAlert);
btn[1].addEventListener("click",()=>console.log("Ella y yo"));
btn[0].addEventListener("mouseover",()=>document.body.style.backgroundColor="red");
btn[0].addEventListener("mouseout",()=>document.body.style.backgroundColor="white");
btn[1].addEventListener("mouseover",()=>document.body.style.backgroundColor="blue");


btn[2].addEventListener("click",()=>btn[0].removeEventListener("click",saltaAlert));

cajaTexto.addEventListener("keydown",()=>console.log("has escrito"));

cajaTexto.addEventListener("keydown", (event) => {
    output.textContent = `You pressed "${event.key}".`;
  });