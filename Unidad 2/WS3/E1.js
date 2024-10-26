//a
/*
function inversion(cadena){
let resultado ="";
    for(let i=cadena.length-1; i>=0; i--){
    resultado += cadena[i];
    return resultado;
    }
}
document.write(inversion(prompt("AAAAA")))
/*
function invertir(cadena){
    let separarCadena = cadena.split("");
    let invertirCadena = separarCadena.reverse("");
    let unirCadena = invertirCadena.join("");
    return unirCadena;
}
    document.write(invertir(cadena));
*/
//b
/*
    let cadena2 = prompt("Introduzca una cadena de texto");

    function invertir(cad){
        let resultado="";
        let separarCadena = cad.split(" ");
        let concatenar = "";
        let invertirCadena="";
        for (let i=0; i = cadena2.length; i++){
            invertirCadena = separarCadena.reverse(" ");
            concatenar = invertirCadena.concat(" ");
            return concatenar;
        }
        
    }
        document.write(invertir(cadena2));
        */
/*
function invertir(cad){
    let resultado ="";
    cadenatrassplit = cad.split(" ");
    for (i=0; i<= cadenatrassplit.length; i++){
    resultado += inversion(cadenatrassplit[i])+" ";
    
    return resultado;
    }
}
document.write(invertir("Ejercicio 2"));

//c
function palabramaslarga(cad){
let palabras = cad.split(" ");
let larga = palabras[0];

    for (let i= 0; i<palabras.length; i++){
        if (palabras[i].length > larga.length){
            larga = palabras[i];
        }
    }
return larga;
}
document.write(palabramaslarga("Hola mundo aaaaaaaaa"));
*/
/*
//d
function filtro(cad){
    let palabra = cad.split(" ");
    let contador= 0;
    let limite=3;
    for (let i=0; i<palabra.length; i++){
        if (palabra[i].length == limite){
            contador++;
        }
    }
    return contador;

}
document.write(filtro("palabras con mas de cincuenta"));

//e
function palabrabienformada(cad){
    let palabras = cad.split(" ");
    let resultado ="";
    let palabra ="";
    for (let i = 0; i<palabras.length; i++){
        palabra = palabras[i];
        palabra=palabra.toLowerCase();
        palabra = palabra[0].toUpperCase()+palabra.slice(1,palabra.length);
        resultado += palabra+" ";
      
    }
    return resultado;
}
document.write(palabrabienformada("HoLa A TodOs A"))
*/