<script setup>
import { GoogleAuthProvider } from 'firebase/auth'
import {
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { useCurrentUser, useFirebaseAuth } from 'vuefire';

const googleAuthProvider = new GoogleAuthProvider();
const user = useCurrentUser();
const auth = useFirebaseAuth();

function iniciarSesion(){
    signInWithPopup(auth, googleAuthProvider).then(
        ()=>console.log("validación correcta")
    ).catch((reason) => {
    console.error('Failed sign', reason)
    error.value = reason
  })
}
function cerrarSesion(){
    signOut(auth).then(
        ()=>console.log("seión cerrada")
    ).catch(
        (e)=>console.log("Se ha producido un error "+e)
    )
}
</script>

<template>
    <p v-if="user">Hola {{ user.displayName }}</p>
    <button v-if="user"@click="cerrarSesion">Cerrar Sesión</button>
    <button v-else @click="iniciarSesion"> Iniciar Sesión</button>
</template>

<style scoped>

</style>