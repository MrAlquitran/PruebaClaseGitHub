<script setup>
import { ref } from 'vue';

const emit = defineEmits(['nota-creada']);
const textoinput = ref("");

function nuevaNota() {
  if (textoinput.value.trim() !== "") {
    emit('nota-creada', textoinput.value);
    textoinput.value = ""; 
  }
}
</script>

<template>
  <div class="input-container">
    <input
      v-model="textoinput"
      placeholder="Organiza tus ideas, crea una nota..."
      @keydown.enter="nuevaNota"
    >
  </div>
</template>

<style scoped>
.input-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem; 
}

input {
  padding-left: 2rem;
  padding-right: 2rem;
  height: 4rem; 
  width: 25rem; 
  font-size: 1.2rem; 
}


</style>