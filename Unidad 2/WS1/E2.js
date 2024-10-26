//a
let fechaHoy = new Date;
//b
let fecha85 = new Date;
fecha85.setDate(fechaHoy.getDate() + 85);
//c
let fecha187= new Date;
fecha187.setDate(fechaHoy.getDate() - 187);

document.write(fecha85+"<br>");
document.write(fecha187+"<br>");
//d
fecha85.setFullYear(fecha85.getFullYear() + 2);
document.write(fecha85+"<br>");
//e
fecha187.setHours((fecha187.getHours()-24));
document.write(fecha187+"<br>");
//f
let fechaResto = new Date;
fechaResto = fecha85.getTime() - fecha187.getTime();
document.write(fechaResto+"<br>");