window.onload = () =>{
    
    for (let i = 0; i < 10; i++) {
        bola.push(new bolas("juego",getRandomInt(300),getRandomInt(300),getRandomInt(20)))
        setInterval(()=>{
            
        })
    }

        for (let i = 0; i < 10; i++) {
            setInterval(() => {
                posicionX = posicionX + velocidadX;
                posicionY = posicionY + velocidadY;
                bola.setAttribute("cx",posicionX);
                bola.setAttribute("cy",posicionY);
                if((posicionX+r)>limiteX){
                    velocidadX *=-1;
                } else if((posicionX-r)<0){
                    velocidadX *=-1;
                }
                
                if((posicionY+r)>limiteY){
                    velocidadY *=-1;
                } else if((posicionY-r)<0){
                    velocidadY *=-1;
                }
                i++
            }, 30);
        }


}

let bola = document.getElementsByTagName("circle");
let posicionX = 50;
let posicionY = 50;
let limiteX = 1000;
let limiteY = 1000;
let r = 50;
let velocidadX = 125;
let velocidadY = 105;

class bolas{
    constructor(svgPadre,x,y,velX,velY,tamanoX,tamanoY){
        posicionX = x;
        posicionY = y;
        velocidadX = velX;
        velocidadY = velY;
        limiteX = tamanoX;
        limiteY = tamanoY;
    }
    crearTag(svgPadre){
        this.bola = document.createElementNS("http://www.w3.org/2000/svg","circle");
        this.bola.setAttribute("cx",this.posicionX)
    }
}

    
    