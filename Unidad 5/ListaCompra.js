window.onload = () =>{
    document.getElementById("btn").addEventListener("click",()=>{
        let contenidoInput = document.getElementById("texto").value; 
        document.getElementById("texto").value=" ";
    
        let nuevaEntradaLista = document.createElement("li");
        nuevaEntradaLista.innerHTML = contenidoInput;
        document.getElementById("lista").appendChild(nuevaEntradaLista);
        editar()
        eliminar()
    })
}

function editar(){
    let nuevobtn = document.createElement("button");
    document.getElementById("lista").appendChild(nuevobtn);

}

function eliminar(){
    let eliminarbtn = document.createElement("button");
    document.getElementById("lista").appendChild(eliminarbtn);

    let quitar = document.getElementsByTagName("li"); 
    eliminarbtn.addEventListener("click",(e)=>{
        e.target.parentElement.removeChild(e.target);
    })
}