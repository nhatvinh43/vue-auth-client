<template>
  <div>
    <form @submit.prevent="handleSubmit" action="#">
      <div>
        <input id="register-email" v-model="email" placeholder="Email" />
      </div>

      <div>
        <input
          id="register-password"
          v-model="password"
          placeholder="Password"
          type="password"
        />
      </div>

      <div>
        <input
          id="register-password-confirm"
          v-model="passwordConfirm"
          placeholder="Confrim Password"
          type="password"
        />
      </div>

      <button type="submit">register</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      passwordConfirm: ""
    };
  },
  methods: {
    handleSubmit: function() {
      this.$store.dispatch("registerAsync", {
        email: this.email,
        password: this.password,
        passwordConfirm: this.passwordConfirm
      });
    }
  }
};
</script>

<style></style>
