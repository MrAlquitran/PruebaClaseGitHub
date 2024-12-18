let a= parseInt(prompt("Introduce el priemr numero"));
let b= parseInt(prompt("Introduce el segundo numero"));
let sum = 0;

for(; a<=b; a++){
    if(!(a%2))
        sum = sum + a;
}