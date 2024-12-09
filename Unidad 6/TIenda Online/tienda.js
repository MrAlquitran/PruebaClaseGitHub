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
let nproducs = 1;
const API = "https://api.escuelajs.co/api/v1/products";
window.onload = () =>{
    document.getElementById("btn").addEventListener("click",mostrarProductos);
}

function mostrarProductos(){

    fetch(API+"/"+nproducs,{method: "GET"})
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