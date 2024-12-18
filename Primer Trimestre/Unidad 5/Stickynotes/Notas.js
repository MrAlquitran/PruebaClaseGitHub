let notas = [];
window.onload = () =>{
    document.addEventListener("click", ()=>{
        notas.push(new Notas("Notas"));
    } );
}

class Notas{
    constructor(elementoPadre,height = 250,width = 250){
        this.elemento = this.crearNota(elementoPadre);
        this.height = height;
        this.width = width;
    }

    crearNota(elementoPadre){
        let nota = document.createElement("Nota","textarea");
        nota.setAttribute("width", this.width); 
        nota.setAttribute("height", this.height);
        document.getElementById(elementoPadre).appendChild(nota);
        return nota;
    }
}
/*
mystickies.createBlankNote = function(width, height) {
		width = width || 200
		height = height || 175
		var noteX = 0.5
		var noteY = (window.innerHeight - height)/2 + window.scrollY
		mystickies.create({
			x: noteX,
			y: noteY,
			w: width,
			h: height
		})
	}
*/