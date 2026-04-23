import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

import Toast from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import Header from './components/Share/Header.vue'
import Footer from './components/Share/Footer.vue'

const app = createApp(App)

app.use(router)

app.use(Toast, {
  autoClose: 300,
  position: "top-right",
})

app.component('AppHeader', Header)
app.component('AppFooter', Footer)
app.mount('#app')




