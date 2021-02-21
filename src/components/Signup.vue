<template>
  <div id="sign-up">
    <h2 class="text-medium">Sign up</h2>
    <form @submit.prevent="handleSubmit" action="#">
      <div>
        <input
          class="input"
          id="sign-up-email"
          v-model="email"
          placeholder="Email"
        />
      </div>

      <div>
        <input
          class="input"
          id="sign-up-password"
          v-model="password"
          placeholder="Password"
          type="password"
        />
      </div>

      <button class="btn-primary" type="submit">Sign up</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    handleSubmit: function() {
      this.$store.dispatch("signUpAsync", {
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>
