/*
1. Analiza la API: fakeapi.platzi.com. Prueba todas las funcionalidades requeridas en el proyecto haciendo uso de Postman
2. Una vez comprendida la API, implementa pruebas en JS.
3. Crear la estructura de HTML para mostrar cada producto. Crear una estructura con clase para contener la imagen, título y precio de un producto.
4. Mostrar las categorías de la API.
5. Mostrar los primeros 10 productos de una categoría fija.
6. Implementa un scroll infinito para cargar los 10 siguientes.
7. Modifica los ejercicios 5 y 6 para cargar los productos de una categoría seleccionada.
8. Implementa el detalle de un producto al seleccionarlo. Debe poderse volver a la vista anterior en su mismo estado.
*/

/*
let nproducs = 1;
let peticion = false;
const API = "https://api.escuelajs.co/api/v1/products";
window.onload = () =>{
    document.getElementById("btn").addEventListener("click",mostrarProductos);
    window.addEventListener('scroll', () => {
        let posicionScroll = window.scrollY; 
        let alturaDocumento = document.body.offsetHeight;
        let alturaVentana = window.innerHeight; 
        let zonaActivar = alturaDocumento - (alturaVentana * 0.4); 
        let posicionActual = posicionScroll + alturaVentana; 
    
        if (posicionActual >= zonaActivar && !peticion) {
          cargarProductos();
        }
      });
}

function mostrarProductos(){

    fetch(API,{method: "GET"})
    .then((res) => res.json())
    .then((productosRecibidos)=>{
        let milista = document.getElementById("lista");
        
        for(let producto of productosRecibidos.products){
            let li = document.createElement("li");
            li.innerHTML = `${producto.title} ${producto.price}`;

            let img = document.createElement("img");
            img.src = producto.image;
            li.appendChild(img);

            milista.appendChild(li);
        }
        console.log(productosRecibidos);
    })
    .catch((err) => console.error("error",err));
}

function cargarProductos() {
    if (!peticion) {
      peticion = true; 
      nproducs++;
      
      document.getElementById("Cargando").classList.remove("null");
      document.getElementById("Cargando").classList.add("visible");
      
      fetch(API+"/"+nproducs,{ method: "GET" })
        .then((res) => res.json())
        .then((productosRecibidos) => {
          let milista = document.getElementById("lista");
  
          for (let producto of productosRecibidos.products) {
            let li = document.createElement("li");
            li.innerHTML = `${producto.title} ${producto.price}`;
  
            let img = document.createElement("img");
            img.src = producto.Poster;
            li.appendChild(img);
  
            milista.appendChild(li);
          }
  
          console.log(productosRecibidos);
            peticion = false;  
        })
        .catch((err) => {
          console.error("error", err);
        })
        .finally(() => {
          peticion = false;
          document.getElementById("Cargando").classList.remove("visible");
          document.getElementById("Cargando").classList.add("null");
        });
    }
  }
*/
let nProductos = 0;
let peticion = false;
const API = "https://api.escuelajs.co/api/v1/products";
const API_CATEGORIAS = "https://api.escuelajs.co/api/v1/categories";

window.onload = () => {
    document.getElementById("btn").addEventListener("click", mostrarProductos);
    window.addEventListener('scroll', () => {
        let posicionScroll = window.scrollY; 
        let alturaDocumento = document.body.offsetHeight;
        let alturaVentana = window.innerHeight; 
        let zonaActivar = alturaDocumento - (alturaVentana * 0.4); 
        let posicionActual = posicionScroll + alturaVentana; 
    
        if (posicionActual >= zonaActivar && !peticion) {
          cargarProductos();
        }
      });
}

function mostrarProductos(){
    fetch(API, { method: "GET" })
    .then((res) => res.json())
    .then((productosRecibidos) => {
        let milista = document.getElementById("lista");
        let categoriasDiv = document.getElementById("categorias");
        categoriasDiv.innerHTML = "";

        // Mostrar categorías
        fetch(API_CATEGORIAS, { method: "GET" })
        .then((res) => res.json())
        .then((categorias) => {
            for (let categoria of categorias) {
                let categoriaBtn = document.createElement("button");
                categoriaBtn.textContent = categoria.name;
                categoriaBtn.onclick = () => cargarProductosPorCategoria(categoria.id);
                categoriasDiv.appendChild(categoriaBtn);
            }
        });

        // Mostrar los primeros 10 productos
        for (let i = 0; i < 10; i++) {
            if (productosRecibidos[i]) {
                let li = document.createElement("li");
                li.className = "producto";
                li.innerHTML = `${productosRecibidos[i].title} $${productosRecibidos[i].price}`;
                let img = document.createElement("img");
                img.src = productosRecibidos[i].images;
                console.log(productosRecibidos[i].images);
                li.appendChild(img);
                milista.appendChild(li);
            }
        }
        nProductos = 10;
    })
    .catch((err) => console.error("error", err));
}

function cargarProductos() {
    if (!peticion) {
      peticion = true; 
      
      document.getElementById("Cargando").classList.remove("null");
      document.getElementById("Cargando").classList.add("visible");
      
      fetch(API, { method: "GET" })
        .then((res) => res.json())
        .then((productosRecibidos) => {
          let milista = document.getElementById("lista");
          for (let i = nProductos; i < nProductos + 10 && i < productosRecibidos.length; i++) {
            let li = document.createElement("li");
            li.className = "producto";
            li.innerHTML = `${productosRecibidos[i].title} $${productosRecibidos[i].price}`;
            let img = document.createElement("img");
            img.src = productosRecibidos[i].images[0];
            li.appendChild(img);
            milista.appendChild(li);
            console.log(productosRecibidos[i].images);
          }
          nProductos += 10;
          peticion = false;  
        })
        .catch((err) => {
          console.error("error", err);
        })
        .finally(() => {
          peticion = false;
          document.getElementById("Cargando").classList.remove("visible");
          document.getElementById("Cargando").classList.add("null");
        });
    }
}

function cargarProductosPorCategoria(categoriaId) {
    fetch(`${API}?category=${categoriaId}`, { method: "GET" })
    .then((res) => res.json())
    .then((productosRecibidos) => {
        let milista = document.getElementById("lista");
        milista.innerHTML = "";
        for (let producto of productosRecibidos) {
            let li = document.createElement("li");
            li.className = "producto";
            li.innerHTML = `${producto.title} $${producto.price}`;
            let img = document.createElement("img");
            img.src = producto.images;
            li.appendChild(img);
            milista.appendChild(li);
        }
    })
    .catch((err) => console.error("error", err));
}