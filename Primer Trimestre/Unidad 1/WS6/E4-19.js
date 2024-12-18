let alto = parseInt(prompt("Introduzca el ancho de las tablas"));
let ancho = parseInt(prompt("Introduzca el ancho de las tablas"));

document.write("<table border= "+ 0 +" cellspacing ="+ 2 +" bgcolor= "+" black "+"width="+200+">");
for (i=1; i<=8;i++){
    
    if(i%2){
        document.write("<tr width = "+ ancho +" height = "+ alto +" bgcolor = " +"black"+ ">");
        //document.write("<tr bgcolor="+"white "+"height="+alto+">");
    } else{
        //document.write("<tr width = "+ ancho +" height = "+ alto +" bgcolor =" +"black"+ ">");
        document.write("<tr bgcolor= "+" white "+" height= "+alto+" >");
    }
    for(k=1;k<=8;k++){
        if(i%2){
            document.write("<td width = "+ ancho +" height = "+ alto +" bgcolor = " +" black "+ " ></td>");
            //document.write("<td width="+ancho+" height="+alto+"></td>")
        } else{
            //document.write("<td width = "+ ancho +" height = "+ alto +" bgcolor =" +"black"+ "></td>");
            document.write("<td width= "+ancho+" height= "+alto+" ></td>")
        }
    }
    document.write("</tr>");
}
document.write("</table>");