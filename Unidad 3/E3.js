let contador = 0;
let resultado;
function lanzamiento(n){
    return n;
}
do{
    console.log(Math.trunc(Math.random() * (7 - 1) + 1));
    contador++
}while(contador < 6000)

switch (lanzamiento(n)) {
    case valor1 == 1:
        console.log("Valor 1 aparece "+ valor1)
        break;

    case valor2 == 2:
    document.write("Valor 2 aparece "+ valor2)
    break;

    case valor3 == 3:
    document.write("Valor 3 aparece "+ valor3)
    break;
    
    case valor4 == 4:
    document.write("Valor 4 aparece "+ valor4)
    break;

    case valor5 == 5:
    document.write("Valor 5 aparece "+ valor5)
   break;

   case valor6 == 6:
    document.write("Valor 6 aparece "+ valor6)
   break;

    default:
        break;
}