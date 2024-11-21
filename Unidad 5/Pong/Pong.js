let svgNS = "http://www.w3.org/2000/svg";
window.onload = () => {
    barraizq = new barra("juego",0,0,50,200,)


}

class barra{
    constructor(svgPadre,ancho = 50,largo = 200,y=0,x=0){
        this.posicionX = x;
        this.posicionY = y;
        this.ancho = ancho;
        this.largo = largo;
        this.elemento = this.crearBarra(svgPadre);
    }
    crearBarra(svgPadre){
        let barra = document.createElementNS(svgNS,"rect");
        barra.setAttribute("x",this.posicionX);
        barra.setAttribute("y",this.posicionY);
        barra.setAttribute("width",this.ancho);
        barra.setAttribute("height",this.largo);
        document.getElementById(svgPadre).appendChild(barra);
        return barra;
    }   
}