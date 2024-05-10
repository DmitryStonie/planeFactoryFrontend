import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import store from './store';
import moment from 'moment'


const app = createApp(App)
  
app.use(moment)
app.use(router)
app.use(store)
app.mount('#app')
