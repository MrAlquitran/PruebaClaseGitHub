let columnas = parseInt(prompt("Introduzca el numero de columnas de una tabla"));
let alto = parseInt(prompt("Introduzca el alto de dichas columnas"));
let ancho = parseInt(prompt("Introduzca el ancho de dichas columnas"));

document.write("<table border = "+ 0 +" cellspacing = "+ 2 +" bgcolor="+ "black" +" width="+ 200 +">");
document.write("<tr bgcolor= "+ "white" +" height = "+ 50 +">");

for (i=1; i <= columnas; i++){
    document.write("<td width = "+ ancho +" height = "+ alto +"</td>");
}
document.write("</tr>");
document.write("</table>");