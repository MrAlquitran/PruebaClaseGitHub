window.onload =()=>{
    document.getElementById("btn").addEventListener("click", peticionAJAX)
}
function peticionAJAX(){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
          console.log(this.responseText);
          respuesta = JSON.parse(this.responseText);
          document.getElementById("titulo").innerHTML = "HE RECIBIDO "+ respuesta.usuarios.length
          let lista = document.createElement("li");
            
          for(usuario of respuesta.usuarios){
            crearlista();
          }
        }
          
        };
        xhttp.open("GET", "usuarios.json", true);
        xhttp.send();
        
}
function crearlista(objeto){
    let lista = document.createElement("li");
    respuesta.usuarios.forEach(objeto => {
        lista.innerText = usuario.nombre;
        document.getElementById("añadir").appendChild(lista);
    });
}