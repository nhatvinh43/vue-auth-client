import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@components/Login";
import Register from "@components/Register";
import PrivatePage from "@components/PrivatePage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/private-page",
    name: "private-page",
    component: PrivatePage
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
