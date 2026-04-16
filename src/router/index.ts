import { createRouter, createWebHistory } from 'vue-router'

import Login from '../components/Auth/Login.vue'
import Register from '../components/Auth/Register.vue'
import HomePage from '@/components/Home/HomePage.vue';
import Projects from '@/components/Projects/Projects.vue';
import ProjectsForm from '@/components/Projects/ProjectsForm.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/createProject', component: Projects },
  { path: '/projectForm', component: ProjectsForm },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router