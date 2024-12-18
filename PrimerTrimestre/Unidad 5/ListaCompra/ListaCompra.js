window.onload = () => {
    crear();
}

function crear() {
    document.getElementById("btn").addEventListener("click", () => {
        let contenidoInput = document.getElementById("texto").value;
        document.getElementById("texto").value = "";

        let nuevaEntradaLista = document.createElement("li");
        nuevaEntradaLista.textContent = contenidoInput;
        
        let eliminarbtn = document.createElement("button");
        eliminarbtn.textContent = "Eliminar";
        eliminarbtn.addEventListener("click", function() {
            eliminar(this);
        });

        let editarbtn = document.createElement("button");
        editarbtn.textContent = "Editar";
        editarbtn.addEventListener("click", function() {
            editar(this);
        });

        nuevaEntradaLista.appendChild(eliminarbtn);
        nuevaEntradaLista.appendChild(editarbtn);
        document.getElementById("lista").appendChild(nuevaEntradaLista);
    });
}

function editar(botonedit) {
    let elementoLista = botonedit.parentElement;
    let textoActual = elementoLista.firstChild.textContent;
    let nuevoTexto = prompt("Edita el texto:", textoActual);
    if (nuevoTexto !== null) {
        elementoLista.firstChild.textContent = nuevoTexto;
    }
}

function eliminar(botonelim) {
    let elementoLista = botonelim.parentElement;
    elementoLista.parentElement.removeChild(elementoLista);
}