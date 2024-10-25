function tabla(){
    document.write("<table border = "+1+">");
    for (let i = 0; i < 100; i++) {
        document.write("<tr width=5px height = 5px>");
        for (let k = 0; k < 100; k++) {
            document.write("<td width=5px height = 5px></td>");
        }
        document.write("</tr>")
    }
    document.write("</table>");

    var celda = document.getElementsByTagName("td");
    

    if ("keydown" == "Shift") {
        document.addEventListener("keydown",()=>{
            document.addEventListener("mousemove",()=>{
                document.body.style.backgroundColor = "blue";
            })
        });    
    } else if ("keydown" == "Control") {
        document.addEventListener("keydown",()=>{
            document.addEventListener("mousemove",()=>{
                document.body.style.backgroundColor = "blue";
            })
        });
    }
    
    document.addEventListener("mousemove", function(seguir){
        const y = seguir.clientY
        const x = seguir.clientX
        console.log(x,y);});
    if ("keydown" == "Shift") {
        document.addEventListener("keydown",()=>{
            document.addEventListener("mousemove",()=>{
                document.body.style.backgroundColor = "blue";
            })
        });    
    } else if ("keydown" == "Control") {
        document.addEventListener("keydown",()=>{
            document.addEventListener("mousemove",()=>{
                document.body.style.backgroundColor = "blue";
            })
        });
    }
}