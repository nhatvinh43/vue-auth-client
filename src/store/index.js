import Vue from "vue";
import Vuex from "vuex";
import LoginStore from "./LoginStore";
import RegisterStore from "./RegisterStore";

Vue.use(Vuex);

const modules = {
  RegisterStore,
  LoginStore
};

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules
});
