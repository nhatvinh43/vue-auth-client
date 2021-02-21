<template>
  <div class="header">
    <div>
      <router-link class="link" to="/public-page">Public page</router-link>
    </div>

    <div>
      <router-link class="link" to="/private-page">Private page</router-link>
    </div>

    <div v-if="isLoggedIn" class="functional-buttons">
      <button class="btn-outline-danger" @click="handleLogout">Logout</button>
    </div>

    <div v-else class="auth-buttons">
      <router-link to="/signup">
        <button class="btn-primary">Sign up</button>
      </router-link>
      <router-link to="/login">
        <button class="btn-ghost">Login</button>
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
