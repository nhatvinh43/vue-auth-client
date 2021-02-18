<template>
  <div>
    <form @submit.prevent="handleSubmit" action="#">
      <div>
        <input id="sign-up-email" v-model="email" placeholder="Email" />
      </div>

      <div>
        <input
          id="sign-up-password"
          v-model="password"
          placeholder="Password"
          type="password"
        />
      </div>

      <div>
        <input
          id="sign-up-password-confirm"
          v-model="passwordConfirm"
          placeholder="Confrim Password"
          type="password"
        />
      </div>

      <button type="submit">Sign up</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      email: "",
      password: "",
      passwordConfirm: ""
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
