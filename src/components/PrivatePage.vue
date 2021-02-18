<template>
  <p>This is a private page</p>
</template>

<script>
export default {
  name: "PrivatePage",
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }
  },
  created: function() {
    if (!this.isLoggedIn) {
      this.$router.push({ name: "login" });
    }
  }
};
</script>
