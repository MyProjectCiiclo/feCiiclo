import { createRouter, createWebHistory } from 'vue-router'

import Login from '../components/Auth/Login.vue'
import Register from '../components/Auth/Register.vue'
import Test from '../components/test.vue';
const routes = [
  { path: '/', component: Test },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router