<template>
  <div class="private-page">This is a private page</div>
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
