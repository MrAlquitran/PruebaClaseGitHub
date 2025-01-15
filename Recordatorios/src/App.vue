<script setup>
import Cabecera from './components/Cabecera.vue';
import Pie from './components/Pie.vue';
import ListaTareas from './components/ListaTareas.vue';
import tarea from './components/tarea.vue';
import resumenTareas from './components/resumenTareas.vue';
import Login from './components/Login.vue';
//VARIABLE DE FIREBASE.JS ES EL DB, "RECORDATORIOS"
import { collection } from 'firebase/firestore'

import { addDoc, query, orderBy } from 'firebase/firestore';
import { useCollection } from 'vuefire';

import { useFirestore } from 'vuefire'
const db = useFirestore()

const recordatoriosRef = useCollection(collection(db, 'Recordatorios'))

function recepcionNota(texto) {
  const nuevaTarea = {
    nombre: texto || "Sin título",
    prioridad: "normal",
    fechacreacion: new Date().toISOString(),
    completado: false,
  };

  addDoc(collection(Recordatorios), nuevaTarea)
    .then((docRef) => {
      console.log("Documento escrito con ID", docRef.id);
    })
    .catch((error) => {
      console.log("ERROR= " + error);
    });
}

function eliminarTarea(pos) {
  recordatoriosRef.value.splice(pos, 1);
}
</script>

<template>
  <Login></Login>
  <Cabecera v-on:keydown.enter="recepcionNota()">  </Cabecera>
  <!-- <resumenTareas :tareaspendientes="Recordatorios.filter((tarea) => !tarea.acabada).length"></resumenTareas> -->
  <tarea v-for="tarea in Recordatorios" :titulo="tarea.nombre"></tarea>
    <ol> <li v-for="(nombre,index) in recordatoriosRef"> {{ nombre }} <button v-on:click="eliminarTarea(index)"></button></li> </ol>
  <Pie></Pie>
</template>

<style scoped>
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
