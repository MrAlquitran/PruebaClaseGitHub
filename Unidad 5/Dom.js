window.onload = () =>{
    document.getElementById("btn").addEventListener("click",()=>{
        let contenidoInput = document.getElementById("texto").value; 
        document.getElementById("texto").value=" ";
        //document.getElementById("titulo").innerHTML = contenidoInput;
        /*
        //Cambio img
        let nuevaurl = "https://cdn-icons-png.flaticon.com/512/3541/3541184.png"
        document.getElementsByTagName("img")[0].src = nuevaurl;
        //Crear img
        let nuevaimg = document.createElement("img");
        nuevaimg.src = nuevaurl;
        document.body.appendChild(nuevaimg);
        */
        //Crear entrada en la lista
        let nuevaEntradaLista = document.createElement("li");
        nuevaEntradaLista.innerHTML = contenidoInput;
        document.getElementById("lista").appendChild(nuevaEntradaLista);

        //Borrar LI
        nuevaEntradaLista.addEventListener("click",(e)=>{
            //console.log(e.target.innerHTML)
            e.target.parentElement.removeChild(e.target);
        })
    });
}