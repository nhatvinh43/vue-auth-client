import { makeRequest } from "@app/utils";

const LoginStore = {
  actions: {
    loginAsync: async ({ commit }, payload) => {
      const result = await makeRequest("/account/login", "post", {
        email: payload.email,
        password: payload.password
      });
      if (result.status === 200) {
        commit("setToken", { token: result.data });
        commit("login");
      }
    }
  }
};

export default LoginStore;
