let contador;
function cronometro(){
    document.write(i);
}
contador = setTimeout(cronometro, 1000)

for (let k = 0; k<=60; k++){
    let i = i++;
    document.write(contador);
}
/*
for(let k=0; k<=60; k++){
    
    setTimeout(() => {
        document.write(k+"<br>");
    }, "10000" );
    
}
*/
/*
for (let i=0; i<=10000; i+1000){
    setTimeout(() => {
        document.write("<br>a");
    }, "1000");

}
*/