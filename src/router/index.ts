import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import Project from "@/views/Project.vue";
import Register from "@/components/Auth/Register.vue";
import Login from "@/components/Auth/Login.vue";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/project",
    component: Project,
  },
  {
    path: "/home",
    component: HomePage,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});