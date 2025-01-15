<script setup>
let textoinput = "";
function nuevaNota() {
    emit('nota-creada', textoinput);
  console.log("Esto viene del hijo: " + textoinput);
  textoinput = "";
    if (textoinput.trim() !== "") {
        emit('nota-creada', textoinput);
        textoinput = "";
    }
}
const emit = defineEmits(['nota-creada']);
</script>
<template>
  <input
    v-model="textoinput"
    placeholder="Organiza tus ideas, crea una nota"
    v-on:keydown.enter="nuevaNota"
  >
</template>
<style scoped>

</style>