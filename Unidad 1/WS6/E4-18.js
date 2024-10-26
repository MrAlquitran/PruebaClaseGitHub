let columnas = parseInt(prompt("Introduzca el numero de columnas"));
let filas = parseInt(prompt("Introduzca el numero de filas"));
let alto = parseInt(prompt("Introduzca el ancho de las tablas"));
let ancho = parseInt(prompt("Introduzca el ancho de las tablas"));

document.write("<table border= "+ 0 +" cellspacing ="+ 2 +" bgcolor= "+" black "+"width="+200+">");
for (i=1; i<=columnas;i++){
    document.write("<tr bgcolor="+"white "+"height="+alto+">");
    for(k=1;k<=filas;k++){
        document.write("<td width="+ancho+" height="+alto+"></td>")
    }
    document.write("</tr>");
}
document.write("</table>");