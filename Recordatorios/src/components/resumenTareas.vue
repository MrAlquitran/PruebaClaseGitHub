<script setup>
import { computed } from 'vue';

const props = defineProps(['tareas']);

const tareaspendientes = computed(() => {
  return props.tareas.filter((tarea) => !tarea.completado).length;
});
</script>

<template>
  <p>{{ tareaspendientes }} tareas sin acabar</p>
</template>

<style scoped>
p {
  font-size: 2rem;
  text-align: center;
  margin-top: 1rem;
}
</style>