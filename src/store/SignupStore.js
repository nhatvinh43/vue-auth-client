import { makeRequest } from "@app/utils";

const SignupStore = {
  actions: {
    signUpAsync: async ({ commit }, payload) => {
      const result = await makeRequest("/account/signup", "post", {
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

export default SignupStore;
