<template>
  <Header :brandName="companyName" v-if="$store.state.isAuthenticated" />
  <router-view></router-view>
  <footer class="fixed-bottom text-center py-3">@Copyright SEDC 2020</footer>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  data() {
    return {
      companyName: "Ohritter"
    };
  },
  components: {
    Header
  }
};
</script>

<style>
body {
  background-color: gainsboro;
}
</style>
