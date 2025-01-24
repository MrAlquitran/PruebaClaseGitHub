<script setup>
import { computed } from 'vue';
import { doc, updateDoc } from 'firebase/firestore';
import { useFirestore } from 'vuefire';
import { deleteDoc } from 'firebase/firestore';

const props = defineProps({
  tareas: Array,
});

const emit = defineEmits(['borrar-tarea']);

const db = useFirestore();

const tareasOrdenadas = computed(() => {
  const orden = { alta: 1, normal: 2, baja: 3 };
  return props.tareas.slice().sort((a, b) => orden[a.prioridad] - orden[b.prioridad]);
});

function borrarLista(id) {
  deleteDoc(doc(db, 'Recordatorios', id))
    .then(() => {
      console.log('Tarea eliminada con ID:', id);
    })
    .catch((error) => {
      console.error('Error al eliminar tarea:', error);
    });
}

async function cambiarPrioridad(id, nuevaPrioridad) {
  try {
    const tareaRef = doc(db, 'Recordatorios', id);    
    await updateDoc(tareaRef, {
      prioridad: nuevaPrioridad
    });
    console.log(`Prioridad actualizada a ${nuevaPrioridad} para la tarea ${id}`);
  } catch (error) {
    console.error("Error al actualizar la prioridad:", error);
  }
}
async function estadoNota(id, estado) {
  try {
    const tareaEst = doc(db, 'Recordatorios', id);
    await updateDoc(tareaEst, { completado: estado });
    console.log(`Estado actualizado a ${estado} para la tarea ${id}`);
  } catch (error) {
    console.error('Error al actualizar el estado:', error);
  }
}
function tiempoDesdeCreacion(fechaCreacion) {
  const ahora = new Date();
  const creacion = new Date(fechaCreacion);
  const diferencia = ahora - creacion;

  const segundos = Math.floor(diferencia / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);

  if (dias > 0) {
    return `Hace ${dias} días`;
  } else if (horas > 0) {
    return `Hace ${horas} horas`;
  } else if (minutos > 0) {
    return `Hace ${minutos} minutos`;
  } else {
    return `Hace ${segundos} segundos`;
  }
}
</script>

<template>
  <div>
    <ol>
    <li v-for="tarea in tareasOrdenadas" :key="tarea.id" :class="'prioridad-' + tarea.prioridad">
      <p class="nota"> {{ tarea.nombre }} </p>
      <p class="creacion"> {{ tiempoDesdeCreacion(tarea.fechacreacion) }}</p>
      <label>
        <input type="checkbox"
         :checked="tarea.completado"
         @change="estadoNota(tarea.id, $event.target.checked)"> Completado
      </label>

      
      <div class="prioridad-checkboxes">
        <label>
          <input type="checkbox"
                 :checked="tarea.prioridad === 'alta'"
                 @change="cambiarPrioridad(tarea.id, 'alta')"> Alta
        </label>
        <label>
          <input type="checkbox" 
                 :checked="tarea.prioridad === 'normal'"
                 @change="cambiarPrioridad(tarea.id, 'normal')"> Normal
        </label>
        <label>
          <input type="checkbox" 
                 :checked="tarea.prioridad === 'baja'"
                 @change="cambiarPrioridad(tarea.id, 'baja')"> Baja
        </label>
      </div>
      
      <button @click="borrarLista(tarea.id)">X</button>
    </li>
  </ol>
  </div>  
</template>

<style scoped>
div {
  background-color: #1d1d1d;
  color: white;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

ol {
  list-style-type: none;
  padding: 0;
}

li {
  background-color: #2a2a2a;
  margin: 0.5rem 0;
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

.nota {
  color: #ffffff;
  font-family: 'Arial', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
}

.nota.completado {
  text-decoration: line-through;
  color: gray;
}

button {
  background-color: rgb(245, 99, 99);
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

button:hover {
  background-color: red;
}

.prioridad-checkboxes {
  display: flex;
  gap: 1rem;
}

.prioridad-checkboxes label {
  color: white;
  font-size: 0.9rem;
  cursor: pointer;
}

.prioridad-alta {
  border-left: 4px solid #ff4d4d;
}

.prioridad-normal {
  border-left: 4px solid #4d79ff;
}

.prioridad-baja {
  border-left: 4px solid #4dff4d;
}

.creacion {
  font-size: 0.8rem;
  color: #aaa;
  margin-top: 0.5rem;
  text-align: right;
}
</style>
