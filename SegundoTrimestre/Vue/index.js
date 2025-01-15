const app = Vue.createApp({
    data() {
      return {
        message: "Hello World!",
        titulo: "Hola",
        edad: "12",
        mostrarEdad: true,
        Nombres: ["jose","paco","ana"],
        contenidoInput: "",
        datos: [{
          edad1:20,
          nombre: "Pablo",
          apellidos: "Peregrina Martín"
        }]
      }
    },
    methods:{
      botonpulsado(){
        this.Nombres.push(this.contenidoInput);
        this.contenidoInput="";
      },
      borrarElemento(pos){
        console.log("borrar elemento"+pos);
        this.Nombres.splice(pos,1);
      }
    }
  })

 app.mount('#app')