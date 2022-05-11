import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Expertise",
    name: "Expertise",
    component: () =>
      import("../views/Expertise.vue"),
  },
  {
    path: "/Experience",
    name: "Experience",
    component: () =>
      import("../views/Experience.vue"),
  },
  {
    path: "/Project",
    name: "Project",
    component: () =>
      import("../views/Project.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
