let n = parseInt(prompt("Introduca un numero para verlo de forma ascendente y su respectivo seno"));

document.write("<table border= "+ 0 +" cellspacing ="+ 2 +" bgcolor= "+" black "+"width="+200+">");
for (let i=1; i<=n;i++){
    document.write("<tr bgcolor="+"white "+"height="+100+">");
    for(let k=1;k<=1;k++){
        document.write("<td width="+100+" height="+100+">"+i+" </td>"+"<td width="+100+" height="+100+">"+Math.sin(i)+"</td>");
    }
    document.write("</tr>");
}
document.write("</table>");