<template>
  <form @submit.prevent="handleSubmit" action="#">
    <div>
      <input id="login-email" v-model="email" placeholder="Email" />
    </div>

    <div>
      <input
        id="login-password"
        v-model="password"
        placeholder="Password"
        type="password"
      />
    </div>

    <button type="submit">Login</button>
  </form>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    handleSubmit: function() {
      this.$store.dispatch("loginAsync", {
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<style></style>
