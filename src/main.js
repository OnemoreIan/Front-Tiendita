import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap'

//import './assets/main.css'
import './assets/index.css'




const app = createApp(App)

app.use(router)

app.use(bootstrap);
app.mount('#app')
