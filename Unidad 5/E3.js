window.onload = () =>{
    let btnIni = document.getElementById("iniciar");
    let btnDet = document.getElementById("parar");
    let btnRe = document.getElementById("reiniciar");
    let segundos = 0;
    let minutos = 0;
    let impSegundos;
    let impMinutos;
    let contador;
    

    btnIni.addEventListener("click",() => {
        iniciar(); 
    }); 
    
    function iniciar() {
        contador = setInterval(cronometro,1000)
    
        btnDet.addEventListener("click", () => {
            detener();
        });

        btnRe.addEventListener("click", () => {
            reiniciar();
        });
        
        function detener(){
            clearInterval(contador);
        
            btnIni.disabled = false;
            btnIni.classList.toggle("disabled");
        }
        
        function reiniciar(){
            detener()
            document.getElementById("minutos").innerText = "00";
            document.getElementById("segundos").innerText = "00";
            segundos = 0;
            minutos = 0;
    
            btnIni.disabled = false;
            btnIni.classList.toggle("disabled");
        }
    
        btnIni.disabled = true;
        btnIni.classList.toggle("disabled")
    }
    
    
    function cronometro(){
        segundos++
        if(segundos > 59){
            segundos = 0;
            minutos++;
        }
        impSegundos = segundos;
        impMinutos = minutos;
        if(segundos < 10){
            impSegundos = "0" + segundos;
        }
        if(minutos < 10){
            impMinutos = "0" + minutos;
        }
    
        document.getElementById("minutos").innerText = impMinutos;
        document.getElementById("segundos").innerText = impSegundos;
    }
}
