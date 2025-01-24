<script setup>
import { useRouter } from 'vue-router';
import { getCurrentUser, useCurrentUser } from 'vuefire';
import Login from './components/Login.vue';
const router = useRouter();

router.beforeEach(async(to, from)=>{
  console.log("salta")
  if(to.meta.requiresAuth){
    const user = await getCurrentUser()
    if(!user){
      return false;
    }else{
      return true;
    }
  } else{
    return true
  }
})
</script>

<template>
  <nav>
    <div class="left-links">
      <RouterLink to="/">Inicio</RouterLink>
      <RouterLink to="/recordatorios">Recordatorios</RouterLink>
    </div>
    <div class="right-login">
      <Login></Login>
    </div>

  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
body, html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden; 
}

nav {
  position: fixed; 
  top: 0; 
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  background-color: rgb(56, 178, 248);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  overflow: hidden; 
}

.left-links {
  display: flex;
  gap: 1rem; 
  white-space: nowrap; 
}

.left-links a {
  color: white;
  text-decoration: none;
}

.left-links a:hover {
  color: yellow;
  transition: 0.4s;
}

.right-login {
  margin-left: auto;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

main {
  margin-top: 5rem; 
  padding: 1rem;
}

@media (min-width: 1024px) {
  nav {
    padding: 1rem 2rem;
  }

  .left-links {
    gap: 2rem;
  }
}
</style>
