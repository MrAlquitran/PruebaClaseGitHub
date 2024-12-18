//1

function sum(num1, num2){
    return num1 + num2
}
let suma = (num1, num2) => num1+num2;
sum(40,2);
sum(42,0);
console.log("the answer to everything is", sum(42,0));

//2

function stringLength(str){
    console.log(`the length of "${str}" is:`, str.length)
}

let longestCityNameInTheWorld = "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu"
stringLength = str => console.log(`the length of "${str}" is:`, str.length)
stringLength(longestCityNameInTheWorld)

//3

stringLength = str => {
    let length = str.length
    console.log(`the length of "${str}" is:`, length)
    return str.length
}

stringLength("willynilly")

//4 Transform this function that selects a random element from the array and concatenates it to your name:

let alerts = ["Hey, you are awesome", "You are so wonderful", "What a marvel you are", "You're so lovely", "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"]

function showAlert(name){    
    alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`)
}
showAlert = name => alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`)

showAlert("you ball of fluff")


//6 Write an arrow function that returns the string, Hello, I am ${name}, and I am ${age} years old.
let nombres = ["Pablo", "Paco", "Manolo", "Ana", "Bea"]
let edad = [20,14,18,90,23]
function hola(name, age){
    name = nombres(Math.floor(Math.random()*nombres.length));
    age = edad(Math.floor(Math.random()*edad.length));
}

