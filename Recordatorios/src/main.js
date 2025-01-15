import './assets/main.css'
import { VueFire, VueFireAuth } from 'vuefire'
import { createApp } from 'vue'
import App from './App.vue'
import { firebaseApp } from './firebase.js'

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
  
app.mount('#app');