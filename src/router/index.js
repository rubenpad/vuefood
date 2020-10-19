import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/*webpackChunkName: "Home" */ "../views/Home.vue")
  },
  {
    path: "/buyers",
    name: "Buyers",
    component: () =>
      import(/*webpackChunkName: "Buyers" */ "../views/Buyers.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
