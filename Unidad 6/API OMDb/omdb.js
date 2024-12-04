/*baa35bb8 
t = encontrar 1 peli
s = todas las peliculas
http://www.omdbapi.com/?apikey=baa35bb8&s=star


img.addEventListener("click",detalle);
img.idpeli = pelicula.imdbID;
function detalle(){
e.target.idpeli;
url = ""http://www.omdbapi.com/?apikey=baa35bb8&s="+idpeli;
}
*/ 
let paginanueva = 1;
let peticion = false;

window.onload = () => {
  document.getElementById("btn").addEventListener("click", peticionAJAXmoderna);

  window.addEventListener('scroll', () => {
    let posicionScroll = window.scrollY; 
    let alturaDocumento = document.body.offsetHeight;
    let alturaVentana = window.innerHeight; 
    let zonaActivar = alturaDocumento - (alturaVentana * 0.4); 
    let posicionActual = posicionScroll + alturaVentana; 

    if (posicionActual >= zonaActivar && !peticion) {
      cargarMas();
    }
  });
};

function peticionAJAXmoderna() {
  let peliculaBuscar = document.getElementById("buscar").value;
  fetch("http://www.omdbapi.com/?apikey=baa35bb8&s="+peliculaBuscar,{ method: "GET" })
    .then((res) => res.json())
    .then((datosRecibidos) => {
      let milista = document.getElementById("lista");
      milista.innerHTML = "";

      for (let pelicula of datosRecibidos.Search) {
        let li = document.createElement("li");
        li.innerHTML = `${pelicula.Title} ${pelicula.Year}`;

        let imagen = document.createElement("img");
        imagen.src = pelicula.Poster;
        li.appendChild(imagen);

        milista.appendChild(li);
      }
      console.log(datosRecibidos);
    })
    .catch((err) => console.error("error", err));
}

function cargarMas() {
  if (!peticion) {
    peticion = true; 
    paginanueva++;
    let peliculaBuscar = document.getElementById("buscar").value;
    fetch("http://www.omdbapi.com/?apikey=baa35bb8&s="+peliculaBuscar+"&page="+paginanueva,{ method: "GET" })
      .then((res) => res.json())
      .then((datosRecibidos) => {
        let milista = document.getElementById("lista");

        for (let pelicula of datosRecibidos.Search) {
          let li = document.createElement("li");
          li.innerHTML = `${pelicula.Title} ${pelicula.Year}`;

          let imagen = document.createElement("img");
          imagen.src = pelicula.Poster;
          li.appendChild(imagen);

          milista.appendChild(li);
        }

        console.log(datosRecibidos);
          peticion = false;  
      })
      .catch((err) => {
        console.error("error", err);
        peticion = false; 
      });
  }
}
    



// img.idpeli = pelicula.imdbID;
// function info(e){
//   e.target.idPelicula;
//   url = "http://www.omdbapi.com/?apikey=baa35bb8&s="+idpeli;
// }
// var peticion = false;