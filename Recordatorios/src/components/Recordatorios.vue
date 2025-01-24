<script setup>
import Cabecera from './Cabecera.vue';
import Pie from './Pie.vue';
import ListaTareas from './ListaTareas.vue';
import resumenTareas from './resumenTareas.vue';
import { deleteDoc, doc, addDoc, collection, where, query, orderBy } from 'firebase/firestore';
import { useCollection, useCurrentUser, useFirestore } from 'vuefire';

const user = useCurrentUser();
const db = useFirestore();

const recordatorios = collection(db, 'Recordatorios');
const recordatoriosRef = useCollection(query(collection(db, 'Recordatorios'), where('idUsuario', '==', user.value.uid), orderBy('nombre')));

function recepcionNota(texto) {
  const nuevaTarea = {
    nombre: texto,
    prioridad: "normal",
    fechacreacion: new Date().toUTCString(),
    completado: false,
    idUsuario: user.value.uid
  };

  addDoc(collection(db, "Recordatorios"), nuevaTarea)
    .then((docRef) => {
      console.log("Documento escrito con ID", docRef.id);
    })
    .catch((error) => {
      console.log("ERROR= " + error);
    });
}
function eliminarTarea(id) {
    deleteDoc(doc(recordatorios, id))
    .then(() => console.log("Tarea eliminada exitosamente: "+id))
    .catch((error) => console.error("Error: ", error));
}
function eliminarTareasCompletadas() {
  recordatoriosRef.value.forEach((tarea) => {
    if (tarea.completado) {
      console.log("Eliminando tarea completada: ", tarea.id);
      eliminarTarea(tarea.id);
    }
  });
}
</script>

<template>
  <Cabecera @nota-creada="recepcionNota"></Cabecera>
  <div class="container">
    <resumenTareas :tareas="recordatoriosRef"></resumenTareas>
    <a @click="eliminarTareasCompletadas">Borrar completadas</a>
    <ListaTareas :tareas="recordatoriosRef" @borrar-tarea="eliminarTarea"></ListaTareas>
    <Pie></Pie>
  </div>
</template>

<style scoped>
body, html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden; 
}

.container {
  max-width: 100%; 
  padding: 1rem; 
  margin: 0 auto; 
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

a {
  display: block;
  text-align: center;
  margin: 1rem auto; 
  color: rgb(219, 255, 91);
  background-color: grey;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  width: 10rem;
}

a:hover {
  color: rgb(255, 217, 0);
  background-color: rgb(87, 87, 87);
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>