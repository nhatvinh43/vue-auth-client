import { makeRequest } from "@app/utils";

const RegisterStore = {
  actions: {
    registerAsync: async ({ commit }, payload) => {
      const result = await makeRequest("/account/register", "post", {
        email: payload.email,
        password: payload.password,
        passwordConfirm: payload.passwordConfirm
      });

      if (result.status === 200) {
        commit("setToken", { token: result.data });
        commit("login");
      }
    }
  }
};

export default RegisterStore;
