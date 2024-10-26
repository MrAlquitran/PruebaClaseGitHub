let img1 = "<img src='corki.jpg'></img>";
let img2 = "<img src='kiwi.gif'></img>";
let img3 = "<img src='dance.gif'></img>";
let random = Math.trunc(Math.random()*3);

const imagenes = [];
imagenes.push(img1,img2,img3);
document.write(imagenes[random]);