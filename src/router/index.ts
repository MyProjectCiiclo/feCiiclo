import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import Project from "@/views/Project.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/project",
    component: Project,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});