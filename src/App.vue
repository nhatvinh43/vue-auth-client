<template>
  <div id="root">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@components/Header";
import "./main.scss";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>
