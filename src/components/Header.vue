<template>
  <div>
    <router-link to="/public-page">Public page</router-link>
    <router-link to="/private-page">Private page</router-link>

    <div v-if="isLoggedIn" class="functional-buttons">
      <button @click="handleLogout">Logout</button>
    </div>

    <div v-else class="auth-buttons">
      <router-link to="/signup">
        <button>Sign up</button>
      </router-link>
      <router-link to="/login">
        <button>Login</button>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    handleLogout: function() {
      this.$store.commit("removeToken");
    }
  }
};
</script>
