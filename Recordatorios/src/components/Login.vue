<script setup>
import { GoogleAuthProvider } from 'firebase/auth'
import { signInWithPopup, signOut } from 'firebase/auth'
import { useCurrentUser, useFirebaseAuth } from 'vuefire';
import { ref } from 'vue';
import { GithubAuthProvider } from "firebase/auth";
import { auth, provider } from '../firebase.js';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";



const googleAuthProvider = new GoogleAuthProvider();
const user = useCurrentUser();
const authGoogle = useFirebaseAuth();
const email = ref('');
const password = ref('');
const error = ref(null);
const mostrarRegistro = ref(true);

function iniciarSesionGoogle(){
    signInWithPopup(authGoogle, googleAuthProvider).then(
        ()=>console.log("validación correcta")
    ).catch((reason) => {
    console.error('Failed sign', reason)
    error.value = reason
  })
}

function cerrarSesion(){
    signOut(authGoogle).then(
        ()=>console.log("seión cerrada")
    ).catch(
        (e)=>console.log("Se ha producido un error "+e)
    )
}

async function iniciarSesionGitHub() {
  try {
    const resultado = await signInWithPopup(auth, provider);
    const user = resultado.user; 
    const credential = GithubAuthProvider.credentialFromResult(resultado);
    const token = credential.accessToken; 

    console.log('Usuario autenticado:', user);
    console.log('Token de GitHub:', token);
  } catch (error) {
    console.error('Error al iniciar sesión con GitHub:', error);
  }
}

function registrarMail() {
    if (!email.value || !password.value) {
        console.error("Email y contraseña son obligatorios");
        return;
    }
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            console.log("Usuario registrado exitosamente:", userCredential.user);
        })
        .catch((error) => {
            console.error("Error al registrar el usuario:", error.code, error.message);
        });
}
function iniciarSesionMail() {
  if (!email.value || !password.value) {
    alert("Por favor, completa todos los campos.");
    return;
  }
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      console.log("Sesión iniciada correctamente:", userCredential.user);
    })
    .catch((error) => {
      console.error("Error al iniciar sesión:", error.code, error.message);
    });
}

    


</script>

<template>
    <div class="auth-container">
      <div v-if="!user" class="buttons">
        <button @click="iniciarSesionGoogle">Iniciar Google</button>
        <button @click="iniciarSesionGitHub">Iniciar Github</button>
      </div>
      <button v-if="user" @click="cerrarSesion">Cerrar Sesión</button>
    </div>
    <div v-if="!user && mostrarRegistro" class="texto">
      <h3>Registro con Email</h3>
      <input v-model="email" type="email" placeholder="Correo electrónico" />
      <input v-model="password" type="password" placeholder="Contraseña" />
      <button @click="registrarMail">Registrarse</button>
      <a href="#" @click.prevent="mostrarRegistro = false">¿Ya tienes una cuenta? Inicia sesión</a>
    </div>
    <div v-if="!user && !mostrarRegistro" class="texto">
      <h3>Iniciar Sesión</h3>
      <input v-model="email" type="email" placeholder="Correo electrónico" />
      <input v-model="password" type="password" placeholder="Contraseña" />
      <button @click="iniciarSesionMail">Iniciar Sesión</button>
      <a href="#" @click.prevent="mostrarRegistro = true">¿No tienes una cuenta? Regístrate</a>
    </div>
  </template>
  
  <style scoped>
  .auth-container {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.5rem;
    display: flex;
    flex-direction: column; 
    gap: 0.5rem; 
  }
  
  button {
    background-color: rgb(2, 129, 151);
    color: white;
    border-radius: 0.5rem;
    padding: 1rem;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;;
    margin-right: 7rem;
  }
  
  button:hover {
    background-color: rgb(64, 193, 233);
  }
  
  .texto {
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 6rem;
  }
  
  .texto input {
    margin: 0.5rem 0;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    width: 100%;
    max-width: 300px;
  }
  
  .texto a {
    color: rgb(248, 245, 56);
    text-decoration: none;
    margin-top: 0.5rem;
  }
  
  .texto a:hover {
    text-decoration: underline;
  }
  </style>
  