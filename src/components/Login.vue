<template>
  <div id="login">
    <h2 class="text-medium">Login</h2>
    <form id="login-form" @submit.prevent="handleSubmit" action="#">
      <div>
        <input
          class="input"
          id="login-email"
          v-model="email"
          placeholder="Email"
        />
      </div>

      <div>
        <input
          class="input"
          id="login-password"
          v-model="password"
          placeholder="Password"
          type="password"
        />
      </div>

      <button class="btn-primary" type="submit">Log in</button>
    </form>
  </div>
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
