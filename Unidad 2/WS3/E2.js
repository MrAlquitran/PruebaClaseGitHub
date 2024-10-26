function info(cad){
    let palabra = cad.split(" ");
    for(let i= 0; i<palabra.length; i++){
        if (palabra == palabra.toLowerCase) {
            document.write("La palabra "+i+"º esta formada por solo minúsculas <br>");
        } else if (palabra == palabra.toUpperCase){
            document.write("La palabra "+i+"º esta formada por solo mayúsculas<br>");
        } else {
            document.write("La palabra "+i+"º esta formada por mayúsculas y minúsculas<br>");
        }
        return 
    }
}

document.write(info("NO me Lo puedO crEer"))