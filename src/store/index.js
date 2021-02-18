import Vue from "vue";
import Vuex from "vuex";
import LoginStore from "./LoginStore";
import SignupStore from "./SignupStore";
import router from "@router";

Vue.use(Vuex);

const modules = {
  SignupStore,
  LoginStore
};

export default new Vuex.Store({
  state: {
    token: ""
  },
  mutations: {
    login: () => {
      router.push({ name: "private-page" });
    },
    setToken: (state, payload) => {
      state.token = payload.token;
      localStorage.setItem("token", state.token);
    },
    removeToken: state => {
      state.token = "";
      localStorage.removeItem("token");
      router.push({ name: "login" });
    }
  },
  actions: {},
  getters: {
    token: state => state.token,
    isLoggedIn: state => (state.token ? true : false)
  },
  modules
});
