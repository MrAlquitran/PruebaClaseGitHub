let columnas = parseInt(prompt("Introduzca el numero de columnas de una tabla"));
let alto = parseInt(prompt("Introduzca el alto de dichas columnas"));
let ancho = parseInt(prompt("Introduzca el ancho de dichas columnas"));
let i = 1;
document.write("<table border = "+ 0 +" cellspacing = "+ 2 +" bgcolor="+ "black" +" width="+ 200 +">");
document.write("<tr bgcolor= "+ "white" +" height = "+ 50 +">");

while (i<=columnas) {
    i++
    document.write("<td width = "+ ancho +" height = "+ alto +"</td>");
}
document.write("</tr>");
document.write("</table>");

