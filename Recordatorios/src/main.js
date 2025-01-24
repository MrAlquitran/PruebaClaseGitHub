import './assets/main.css'
import { VueFire, VueFireAuth } from 'vuefire'
import { createApp } from 'vue'
import App from './App.vue'
import { firebaseApp } from './firebase.js'
import { createWebHistory, createRouter, useRoute } from 'vue-router'
import Landing from './components/Landing.vue'
import Recordatorios from './components/Recordatorios.vue'


const routes = [
  { path: '/', component: Landing, meta:{requiresAuth: false} },
  { path: '/recordatorios', component: Recordatorios, meta:{requiresAuth: true} },
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})
//createApp(App).mount('#app')
const app = createApp(App);
app.use(VueFire, {
    // imported above but could also just be created here
    firebaseApp,
    modules: [
      // we will see other modules later on
      VueFireAuth(),
    ],
  })
  app.use(router)
app.mount('#app');