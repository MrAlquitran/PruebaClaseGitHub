const app = Vue.createApp({
  data() {
    return {
      name: "Lista de la compra",
      lista: [],
      input: "",
      submit: "Añadir",
      
    }
  },
  methods: {
    crearLista() {
        
      this.input="" 
    }
  }
})

app.mount('#entorno')
