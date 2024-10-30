window.onload = ()=>{
    btn[0].addEventListener("click",suma());
    btn[1].addEventListener("click",resta());
    btn[2].addEventListener("click",mult());
    btn[3].addEventListener("click",div());
    btn[4].addEventListener("click",numero());
}
let btn = document.getElementsByTagName("button");
let i = btn[4];
i = btn[i].addEventListener("click",numero(i))

function numero(i){
    document.getElementById("mostrarNum").innerHTML=btn[i].innerHTML="4";
}

function suma(){

}

function resta(){

}

function mult(){

}

function div(){

}