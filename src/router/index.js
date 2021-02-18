import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@components/Login";
import Register from "@components/Register";
import PrivatePage from "@components/PrivatePage";
import PublicPage from "@components/PublicPage";

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
  },
  {
    path: "/public-page",
    name: "public-page",
    component: PublicPage
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
