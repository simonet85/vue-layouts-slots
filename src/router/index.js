import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import About from "../views/About.vue";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    // base: process.env.BASE_URL,
    name: "About",
    component: () => import(/*webpackChunkName: 'about'*/ "../views/About")
  }
];

const router = new VueRouter({ mode: "history", routes });
export default router;
