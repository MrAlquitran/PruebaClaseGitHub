let a = Math.random();
document.write(a);

let b = Math.random()*(200-100)+100;
document.write("<br>"+ b);

let num1 = parseInt(prompt("Introduzca un numero"));
let num2 = parseInt(prompt("Introduzca un segundo numero"));

if(num1 > num2){
    document.write("<br>"+Math.random()*((num1-num2)+num2));
} else{
    document.write("<br>"+Math.random()*((num2-num1)+num1));
}